"use strict";

function UIdrumsInit() {
	const win = UIwindows.window( "drums" );

	UIdrums.setDAWCore( DAW );
	UIdrums.rootElement.setPxPerBeat( 120 );
	UIdrums.setWaveforms( UIpatterns.svgForms.bufferHD );
	UIdrums.rootElement.onfocus = () => DAW.drumsFocus();
	DOM.drumsName.onclick = UIdrumsNameClick;
	win.onfocusin = UIdrumsWindowFocusin;
	win.contentAppend( UIdrums.rootElement );
}

function UIdrumsWindowFocusin( e ) {
	if ( !UIdrums.rootElement.contains( e.target ) ) {
		UIdrums.rootElement.focus();
	}
}

function UIdrumsNameClick() {
	const id = DAW.get.patternDrumsOpened(),
		name = DOM.drumsName.textContent;

	GSUI.popup.prompt( "Rename pattern", "", name, "Rename" )
		.then( name => DAW.callAction( "renamePattern", id, name ) );
}
