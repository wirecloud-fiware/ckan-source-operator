Operator to retrieve data from a CKAN resource. Once that the resource has been retrived, the data is processed and pushed through the only output endpoint of the operator. 

Preferences that you should consider:

* The link to the CKAN instance where the resource is stored (https://data.lab.fiware.org by default)
* The resource identifier
* The number of records to retrieve. By default, 100 records are retrieved. This cannot be enough for large resource. If you want to retrieve more that 100 records, you must edit this property.
