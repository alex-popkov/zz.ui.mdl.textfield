/**
 * @fileoverview Provide zz.ui.mdl.textfield base object.
 * @license Apache-2.0
 * @author popkov.aleksander@gmail.com (Popkov Alexander)
 */

goog.provide( 'zz.ui.mdl.textfield' );

goog.require( 'goog.ui.decorate' );

goog.require( 'zz.ui.mdl.textfield.tpl' );
goog.require( 'zz.ui.mdl.TextField' );
goog.require( 'zz.ui.mdl.TextFieldRenderer' );
/**
 * Base namespace for zz.ui.mdl.textfield module.
 * @const
 */
zz.ui.mdl.textfield = zz.ui.mdl.textfield || { };

/**
 * Bootstrap module method.
 */
zz.ui.mdl.textfield.bootstrap = function( ){

    goog.ui.registry.setDecoratorByClassName( zz.ui.mdl.TextFieldRenderer.CSS_CLASS, function( ){

        return new zz.ui.mdl.TextField( );
    } );
    soy.renderElement( goog.dom.getElement( 'root' ), zz.ui.mdl.textfield.tpl.default );

	var tf1 = goog.ui.decorate( goog.dom.getElement( '1' ) );
	var tf2 = goog.ui.decorate( goog.dom.getElement( '2' ) );

	tf1.setEnabled( false );
};
goog.exportSymbol( 'zz.ui.mdl.textfield.bootstrap', zz.ui.mdl.textfield.bootstrap );