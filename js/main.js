/*
 * Copyright (c) 2014 CoNWeT Lab., Universidad Politécnica de Madrid
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function () {

  'use strict';

  var preference_ckan_server = 'ckan_server';
  var preference_resource = 'resource';
  var preference_limit_rows = 'limit_rows';
  var ckan_server = MashupPlatform.prefs.get(preference_ckan_server);
  var resource = MashupPlatform.prefs.get(preference_resource);
  var limit_rows = MashupPlatform.prefs.get(preference_limit_rows);

  //CKAN types must be transformed in JS types
  //to be used across the different widgets
  var TYPE_MAPPING = {
    'text': 'string',
    'numeric': 'number',
    'int4': 'number',
    'timestamp': 'date'
  }


  ////////////
  //AUXILIAR//
  ////////////

  var make_request = function(url, method, onSuccess, onFailure) {
    MashupPlatform.http.makeRequest(url, {
      method: method,
      onSuccess: onSuccess,
      onFailure: onFailure,
      
      requestHeaders: {
        'X-FI-WARE-OAuth-Token': 'true',
        'X-FI-WARE-OAuth-Header-Name': 'X-Auth-Token'
      }
    });
  }

  var logError = function(e, type) {
    var msg = e ? e : 'An error arised processing your request';
    var type = type ? type : MashupPlatform.log.ERROR;
    MashupPlatform.operator.log(msg, type);
  }


  ///////////////////////
  //GET THE PREFERENCES//
  ///////////////////////

  var prefHandler = function(preferences) {
    ckan_server = preference_ckan_server in preferences ? preferences[preference_ckan_server] : ckan_server;
    resource = preference_resource in preferences ? preferences[preference_resource] : resource;
    limit_rows = preference_limit_rows in preferences ? preferences[preference_limit_rows] : limit_rows;

    // Load the new resource
    get_resource();
  }

  MashupPlatform.prefs.registerCallback(prefHandler);


  ///////////////////////////////////////////////
  //FUNCTIONS CALLED WHEN THE HTTP REQUEST ENDS//
  ///////////////////////////////////////////////
  
  var pushResourceData = function(response) {

    var resource = JSON.parse(response.responseText);

    if (resource['success']) {

      var finalData = {
        structure: resource['result']['fields'],
        data: resource['result']['records']
      }

      //Type transformation
      for (var i = 0; i < finalData.structure.length; i++) {
        if (finalData.structure[i].type in TYPE_MAPPING) {
          finalData.structure[i].type = TYPE_MAPPING[finalData.structure[i].type]; 
        }
      }

      //Push the data through the wiring
      MashupPlatform.wiring.pushEvent('resource', JSON.stringify(finalData));

      //Log warn message if limit_rows < resource elements
      var resource_total = resource['result']['total'];
      if (resource_total > limit_rows) {
        msg = 'The number of records of the resource are higher than the max number of ' +
            'elements to retrieve. If you want to retrieve all the records, increase the ' +
            'max number of elements to retrieve by editing the operator settings'.

        logError(msg, MashupPlatform.log.WARN)
      }

    } else {
      logError();
    }
  }

  var failureCb = function(e) {
    logError(e.status + ' - ' + e.statusText, MashupPlatform.log.ERROR);
  }


  ////////////////////
  //GET THE RESOURCE//
  ////////////////////

  var get_resource = function() {
    make_request(ckan_server + '/api/action/datastore_search?limit=' + limit_rows + 
        '&resource_id=' + resource, 'GET', pushResourceData, failureCb);
  }


  //Start the execution when the DOM is enterely loaded
  document.addEventListener('DOMContentLoaded', get_resource.bind(this), true);

})();
