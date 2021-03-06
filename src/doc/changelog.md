## v0.4.5 (2016-11-30)

- Added some missing type mappings (`int`, `float` and `float8`)
- Use the same source for building the `ckan-source-from-url` operator.
- Data sent by this operators now has metadata with server URL and resource ID.

## v0.4.4 (2016-10-26)

- Fix problem requesting data. The correct name for the `limit_rows` parameter
  is `limit`. Newer versions of CKAN complain using a `Validation Error`
  exception when using the `limit_rows` parameter. This version fixes this bug.
- Fix **Row limit** preference description.

## v0.4.3

- Support for querying the CKAN server without specifying the limit parameter


## v0.4.2

- Fix bug using CKAN API keys


## v0.4.1

- Fix bug making this operator unusable on WireCloud 0.7.0r5+


## v0.4

- Initial documentation
- Allow to provide CKAN tokens for authentication. This token is provided
  through a new preference and if you use it will disable the athentication
  using the IdM token of the user.
- Provide resource id through wiring
- Update FIWARE Lab URLs using the new schema (fiware.org instead of
  fi-ware.org)


## v0.1

* First version
