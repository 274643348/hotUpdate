/**
 * @module cocos2dx_experimental_webView
 */
var ccui = ccui || {};

/**
 * @class WebView
 */
ccui.WebView = {

/**
 * @method setOnShouldStartLoading
 * @param {function} arg0
 */
setOnShouldStartLoading : function (
func 
)
{
},

/**
 * @method setOnDidFailLoading
 * @param {function} arg0
 */
setOnDidFailLoading : function (
func 
)
{
},

/**
 * @method canGoBack
 * @return {bool}
 */
canGoBack : function (
)
{
    return false;
},

/**
 * @method loadHTMLString
 * @param {String} arg0
 * @param {String} arg1
 */
loadHTMLString : function (
str, 
str 
)
{
},

/**
 * @method goForward
 */
goForward : function (
)
{
},

/**
 * @method goBack
 */
goBack : function (
)
{
},

/**
 * @method setScalesPageToFit
 * @param {bool} arg0
 */
setScalesPageToFit : function (
bool 
)
{
},

/**
 * @method getOnDidFailLoading
 * @return {function}
 */
getOnDidFailLoading : function (
)
{
    return std::function<void (cocos2d::experimental::ui::WebView , std::basic_string<char> &)>;
},

/**
 * @method loadFile
 * @param {String} arg0
 */
loadFile : function (
str 
)
{
},

/**
 * @method loadURL
 * @param {String} arg0
 */
loadURL : function (
str 
)
{
},

/**
 * @method setBounces
 * @param {bool} arg0
 */
setBounces : function (
bool 
)
{
},

/**
 * @method evaluateJS
 * @param {String} arg0
 */
evaluateJS : function (
str 
)
{
},

/**
 * @method setOnJSCallback
 * @param {function} arg0
 */
setOnJSCallback : function (
func 
)
{
},

/**
 * @method getOnJSCallback
 * @return {function}
 */
getOnJSCallback : function (
)
{
    return std::function<void (cocos2d::experimental::ui::WebView , std::basic_string<char> &)>;
},

/**
 * @method canGoForward
 * @return {bool}
 */
canGoForward : function (
)
{
    return false;
},

/**
 * @method getOnShouldStartLoading
 * @return {function}
 */
getOnShouldStartLoading : function (
)
{
    return std::function<bool (cocos2d::experimental::ui::WebView , std::basic_string<char> &)>;
},

/**
 * @method stopLoading
 */
stopLoading : function (
)
{
},

/**
 * @method reload
 */
reload : function (
)
{
},

/**
 * @method loadData
 * @param {cc.Data} arg0
 * @param {String} arg1
 * @param {String} arg2
 * @param {String} arg3
 */
loadData : function (
data, 
str, 
str, 
str 
)
{
},

/**
 * @method setJavascriptInterfaceScheme
 * @param {String} arg0
 */
setJavascriptInterfaceScheme : function (
str 
)
{
},

/**
 * @method setOnDidFinishLoading
 * @param {function} arg0
 */
setOnDidFinishLoading : function (
func 
)
{
},

/**
 * @method getOnDidFinishLoading
 * @return {function}
 */
getOnDidFinishLoading : function (
)
{
    return std::function<void (cocos2d::experimental::ui::WebView , std::basic_string<char> &)>;
},

/**
 * @method create
 * @return {cc.experimental::ui::WebView}
 */
create : function (
)
{
    return cc.experimental::ui::WebView;
},

/**
 * @method WebView
 * @constructor
 */
WebView : function (
)
{
},

};
