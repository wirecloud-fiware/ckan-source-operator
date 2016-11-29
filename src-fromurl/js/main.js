/*
 * Copyright (c) 2014-2016 CoNWeT Lab., Universidad Politécnica de Madrid
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

    var getURLParameter = function getURLParameter(name, url) {
        var value;

        if (url.search !== '') {
            // Remove the initial "?" char
            url.search.substr(1).split("&").some(function (paramdef) {
                var parts = paramdef.split("=", 2);
                var paramname = decodeURIComponent(parts[0]);
                if (paramname === name) {
                    if (parts.length === 2) {
                        value = decodeURIComponent(parts[1]);
                    } else {
                        value = "";
                    }
                    return true;
                }
            });
            return value;
        } else {
            return null;
        }
    };

    var init = function init() {
        var mashupUrl = window.frameElement.parentNode.ownerDocument.location;
        var ckanserver = getURLParameter('ckanserver', mashupUrl);
        var resourceid = getURLParameter('resourceid', mashupUrl);
        get_resource(ckanserver, resourceid);
    };

    init();

})();
