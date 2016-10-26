Introduction
------------

This operator allows you to use any [CKAN][ckan] dataset stored in the DataStore as a source of data.

Settings
--------

Preferences that you should consider:

* **CKAN Server URL**: The link to the CKAN instance where the resource is stored (https://data.lab.fiware.org by default).
* **CKAN Authorization Token**: CKAN Authorization Token. If empty, this operator will use the IdM credentials of the current user (only available for users logged through the IdM server, so will not work for anoymous users/public workspaces).
* **Resource ID**: The resource identifier.
* **Row limit**: Maximum number of rows/results to retrieve. 0 or empty to use the default configuration from the CKAN server.

Obtaining a resource ID
-----------------------

1. Look for a dataset of your interest.
2. Open the details page of the resource you want to use from the dataset and check it can be used through the "Data API":

    ![DataAPI screenshot](images/DataAPI.png)

3. Scroll down the details page and click "Show more" in the "Additional Information" section.
4. Copy the id field :):

    ![id field screenshot](images/resourceid.png)

> **Note:** Currently, only CSV resources can be used through the "Data API".

References
----------

* [FIWARE Lab's Data portal](https://data.lab.fiware.org)
* [CKAN][ckan]

[ckan]: http://ckan.org/
