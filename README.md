# CKAN Source operator

[![](https://nexus.lab.fiware.org/repository/raw/public/badges/chapters/visualization.svg)](https://www.fiware.org/developers/catalogue/)
![](https://img.shields.io/github/license/wirecloud-fiware/ckan-source-operator.svg)<br/>

The `ckan-source` and `ckan-source-from-url` operator is a
[WireCloud operator](http://wirecloud.readthedocs.org/en/latest/) which retrieves data from a CKAN resource. Once that
the resource has been retrived, the data is processed and pushed through a output endpoint. The `ckan-source-from-url`
variant of the operator retieves the ckan server and resource id configuration from the GET parameters used for loading
the dashboard and is meant to be used by the
[`ckanext-wirecloud_view`](https://github.com/conwetlab/ckanext-wirecloud_view) plugin.

## Build

Be sure to have installed [Node.js](http://node.js) and [Bower](http://bower.io) in your system. For example, you can
install it on Ubunutu and Debian running the following commands:

```console
curl -sL https://deb.nodesource.com/setup | sudo bash -
sudo apt-get install nodejs
sudo apt-get install npm
sudo npm install -g bower
```

Install other npm dependencies by running:

```console
npm install
```

For build the operator you need download grunt:

```console
sudo npm install -g grunt-cli
```

And now, you can use grunt:

```console
grunt
```

If everything goes well, you will find a wgt file in the **build** folder.

## Documentation

Documentation about how to use those operators is available on [`ckan-source` User Guide](src/doc/userguide.md) and in
the [`ckan-source-from-url` User Guide](src-fromurl/doc/userguide.md). Anyway, you can find general information about
how to use operators on the [WireCloud's User Guide](https://wirecloud.readthedocs.io/en/stable/user_guide/) available
on Read the Docs.

## Copyright and License

Copyright 2014-2016 CoNWeT Lab., Universidad Politecnica de Madrid Licensed under the Apache-2.0 license.
