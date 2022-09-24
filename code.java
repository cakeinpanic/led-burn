// medium article with full example
// https://medium.com/@skywall/inject-js-into-androids-webview-8845fb5902b7

// how to load local file on android
// https://stackoverflow.com/a/51822901/4166537

// copied from docs https://developer.android.com/develop/ui/views/layout/webapps/webview#java

// Sending data to JS
public void sendToJS() {
        stringToSend='Katya speaks from Android'
        // IMPORTANT this line is critical for API
        webView.loadUrl("javascript:(getFromAndroid('" + stringToSend + "'))")
}

// add JS interface
public class WebAppInterface {

    /**
     * Show a toast from the web page
     */
    // IMPORTANT: name of this function is critical for API
    @JavascriptInterface
    public void sendMeEvent(String toast) {
        Toast.makeText(mContext, toast, Toast.LENGTH_SHORT).show();
    }

}
