Introduction
------------

This operator allows you to use any [CKAN][ckan] dataset stored in the DataStore as a source of data. This variant of the `ckan-source` variant of the operator retieves the ckan server and resource id configuration from the GET parameters used for loading the dashboard and is meant to be used by the [`ckanext-wirecloud_view`](https://github.com/conwetlab/ckanext-wirecloud_view) plugin.

Settings
--------

Preferences that you should consider:

* **CKAN Authorization Token**: CKAN Authorization Token. If empty, this operator will use the IdM credentials of the current user (only available for users logged through the IdM server, so will not work for anoymous users/public workspaces).
* **Row limit**: Maximum number of rows/results to retrieve. 0 or empty to use the default configuration from the CKAN server.

References
----------

* [FIWARE Lab's Data portal](https://data.lab.fiware.org)
* [CKAN][ckan]

[ckan]: http://ckan.org/
