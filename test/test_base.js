'use strict';

var expect				= require('expect.js');
var ClientLinker		= require('clientlinker');
var confighandlerTest	= require('../');

describe('#base', function()
{
	var linker = ClientLinker(
		{
			flows: ['confighandler'],
			clients: {
				client: {
					confighandler: confighandlerTest.methods
				}
			}
		});

	linker.flow('confighandler', require('clientlinker-flow-confighandler'));
	confighandlerTest.run(linker, 'client');
});
