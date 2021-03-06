/**
 * Copyright (c) 2006
 * 
 * Philipp Berger, Martin Czuchra, Gero Decker, Ole Eckermann, Lutz Gericke,
 * Alexander Hold, Alexander Koglin, Oliver Kopp, Stefan Krumnow, 
 * Matthias Kunze, Philipp Maschke, Falko Menge, Christoph Neijenhuis, 
 * Hagen Overdick, Zhen Peng, Nicolas Peters, Kerstin Pfitzner, Daniel Polak,
 * Steffen Ryll, Kai Schlichting, Jan-Felix Schwarz, Daniel Taschik, 
 * Willi Tscheschner, Björn Wagner, Sven Wagner-Boysen, Matthias Weidlich
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 * 
 **/

if (!Signavio) {
	var Signavio = new Object();
}

if (!Signavio.Plugins) {
	Signavio.Plugins = new Object();
}

if (!Signavio.Plugins.Utils) {
	Signavio.Plugins.Utils = new Object();
}

if (!Signavio.Helper) {
	Signavio.Helper = new Object();
}


new function() {

	/**
	 * Provides an uniq id
	 * @overwrite
	 * @return {String}
	 *
	 */
	ORYX.Editor.provideId = function() {
		var res = [], hex = '0123456789ABCDEF';
	
		for (var i = 0; i < 36; i++) res[i] = Math.floor(Math.random()*0x10);
	
		res[14] = 4;
		res[19] = (res[19] & 0x3) | 0x8;
	
		for (var i = 0; i < 36; i++) res[i] = hex[res[i]];
	
		res[8] = res[13] = res[18] = res[23] = '-';
	
		return "sid-" + res.join('');
	};


}();

