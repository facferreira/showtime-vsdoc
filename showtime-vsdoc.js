var showtime = {
    /// <field name='currentVersionInt' static='true' type='Integer'>
    ///     Current version of Showtime encoded as an integer. This can be used to check if running a given version X or greater, etc.
    ///     <para></para>
    ///     <para>The version number is encoded as:</para>
    ///     <para>major * 10000000 +  minor * 100000 + commit</para>
    ///     <para></para>
    ///     <para>e.g. 40100440, where 4 is the major, 1 is the minor and 440 is the commit</para>
    /// </field>
    "currentVersionInt": null,

    /// <field name='currentVersionString' static='true' type='String'>
    ///     Display name of current version. This will also include GIT commit hash and dirty flag.
    ///     <para>e.g. 4.1.440.ge44e6</para>
    /// </field>
    "currentVersionString": null,

    "trace": function (message, tag) {
        /// <summary>
        ///     Send Message to Showtime's log/trace engine on debug level. This will appear on the console if Showtime is started with the -d option
        /// </summary>
        /// <param name="message" type="String">
        ///     Message to print to log.
        /// </param>
        /// <param name="tag" type="String">
        ///     Tag that identifies the message
        /// </param>
    },
    "print": function (message) {
        /// <summary>
        ///     Print message to console log.
        /// </summary>
        /// <param name="message" type="String"'>
        ///     Message to print to log.
        /// </param>
    },
    "httpGet": function (url, queryArgs, headers, control) {
        /// <summary>
        ///     Makes a HTTP Get request.
        /// </summary>
        /// <param name="url" type="String">
        ///     URL to request. HTTP:// and HTTPS:// is supported.
        /// </param>
        /// <param name="queryArgs" type="Object">
        ///     Object with properties that will be appended to the URL as query arguments. This can also be a list of objects and if so the properties from each object will be merged.
        /// </param>
        /// <param name="headers" type="Object">
        ///     Object with properties that will be interpreted as extra HTTP headers to send. If these includes a header that is default sent by Showtime, the default will be overridden with the value from this object. Available from 3.1.177
        /// </param>
        /// <param name="control" type="Object">
        ///     <para>Object with properties that control the HTTP client. The following properties are understood: Available from 3.5.125</para>
        ///     <para> * debug - If set to true, it will print debug info about the transfer</para>
        ///     <para> * noFollow - If set to true, no redirects will be followed</para>
        ///     <para> * headRequest - If set to true, the request will return only headers</para>
        /// </param>
        /// <returns type="Object">HTTP response object.</returns>
    },
    "httpPost": function (url, postdata, queryArgs, headers, control) {
        /// <summary>
        ///     Makes a HTTP POST request.
        /// </summary>
        /// <param name="url" type="String">
        ///     URL to request. HTTP:// and HTTPS:// is supported.
        /// </param>
        /// <param name="postdata" type="Object">
        ///     Object where each property will be encoded and POSTed as application/x-www-form-urlencoded content.
        /// </param>
        /// <param name="queryArgs" type="Object">
        ///     Object with properties that will be appended to the URL as query arguments. This can also be a list of objects and if so the properties from each object will be merged.
        /// </param>
        /// <param name="headers" type="Object">
        ///     Object with properties that will be interpreted as extra HTTP headers to send. If these includes a header that is default sent by Showtime, the default will be overridden with the value from this object. Available from 3.1.177
        /// </param>
        /// <param name="control" type="Object">
        ///     <para>Object with properties that control the HTTP client. The following properties are understood: Available from 3.5.125</para>
        ///     <para> * debug - If set to true, it will print debug info about the transfer</para>
        ///     <para> * noFollow - If set to true, no redirects will be followed</para>
        ///     <para> * headRequest - If set to true, the request will return only headers</para>
        /// </param>
        /// <returns type="Object">HTTP response object.</returns>
    },
    "querySplitString": function (query) {
        /// <summary>
        ///     Returns object with properties set to values according to contents from the query string.
        /// </summary>
        /// <param name="query" type="String">
        ///     Query to split into an object
        /// </param>
        /// <returns type="Object"></returns>
    },
    "pathEscape": function (url) {
        /// <summary>
        ///     Escapes a URL Path component.
        /// </summary>
        /// <param name="query" type="String">
        ///     URL to escape.
        /// </param>
        /// <returns type="String"></returns>
    },
    "paramEscape": function (query) {
        /// <summary>
        ///     Escapes a HTTP query parameter component.
        /// </summary>
        /// <param name="query" type="String">
        ///     HTTP query to escape.
        /// </param>
        /// <returns type="String"></returns>
    },
    "canHandle": function (url) {
        /// <summary>
        ///     Checks if Showtime can handle the URL. This does not open or probe the URL in any way. It's a strict syntactic check.
        /// </summary>
        /// <param name="url" type="String">
        ///     URL to test.
        /// </param>
        /// <returns type="Boolean"></returns>
    },
    "message": function (message, showOk, showCancel) {
        /// <summary>
        ///     Display a message to the user.
        /// </summary>
        /// <param name="message" type="String">
        ///     Text to display to the user
        /// </param>
        /// <param name="showOk" type="Boolean">
        ///     Set to true if a OK button should be displayed
        /// </param>
        /// <param name="showCancel" type="Boolean">
        ///     Set to true if a Cancel button should be displayed
        /// </param>
        /// <returns type="Boolean">Return true if OK was pressed, false otherwise.</returns>
    },
    "sleep": function (seconds) {
        /// <summary>
        ///     Sleep for the specified time.
        /// </summary>
        /// <param name="seconds" type="Integer">
        ///     Time to sleep (in seconds)
        /// </param>
    },
    "JSONEncode": function (object) {
        /// <summary>
        ///     JSON encodes the Object and return the encoded JSON string.
        /// </summary>
        /// <param name="object" type="Object">
        ///     Object to encode into a string.
        /// </param>
        /// <returns type="String">Encoded JSON string</return>
    },
    "JSONDecode": function (string) {
        /// <summary>
        ///     JSON decodes the String and return a JSON Object.
        /// </summary>
        /// <param name="string" type="String">
        ///     String to parse into an object.
        /// </param>
        /// <returns type="Object">JSON Object</return>
    },
    "entityDecode": function (string) {
        /// <summary>
        ///     Decode HTML ententies in string s and return the new string. Available from 3.5.174
        /// </summary>
        /// <param name="string" type="String">
        ///     String to decode
        /// </param>
        /// <returns type="String">String decoded</return>
    },
    "notify": function (message, seconds, icon) {
        /// <summary>
        ///     Create a Popup thar shows a message during a certain amount of seconds. Optionally with the an icon being displayed next to the notification. Available from 3.99.48
        /// </summary>
        /// <param name="message" type="String">
        ///     Message to show in popup
        /// </param>
        /// <param name="seconds" type="Integer">
        ///     Duration of the notification
        /// </param>
        /// <param name="icon" type="String">
        ///     Icon to show next to the message.
        /// </param>
    },
    "time": function () {
        /// <summary>
        ///     Return current time in seconds since 1970.
        /// </summary>
        /// <returns type="Integer"></returns>
    },
    "durationToString": function (duration) {
        /// <summary>
        ///     Convert duration into a string that is suitable for display to the user for presentation of duration (of movies, etc)
        ///     <para>43 -> 0:43 3601 -> 1:00:01</para>
        /// </summary>
        /// <param name="duration" type="Integer">
        ///     Duration to convert into a string (in minutes).
        /// </param>
        /// <returns type="String">Duration string</returns>
    },
    "probe": function (url) {
        /// <summary>
        ///     Probe the given URL to check if it is accessible.
        ///     <para>Returns an object with two properties</para>
        ///     <para></para>
        ///     <para> * result - Result code, 0 means OK, the following codes are currently defined</para>
        ///     <para>      1 - Authentication problem - Resource can not be probed due to missing authnetication credentials</para>
        ///     <para>      2 - No URI handler - No support for the URI scheme</para>
        ///     <para>      3 - Fail - Other failure</para>
        ///     <para></para>
        ///     <para>errmsg - Error message intended to be displyed to the user</para>
        /// </summary>
        /// <param name="duration" type="Integer">
        ///     Duration to convert into a string (in minutes).
        /// </param>
        /// <returns type="Object"Result</returns>
    },
    "textDialog": function (message, showOk, showCancel) {
        /// <summary>
        ///     Shows a box with a message where user can write something intended.
        ///     <para></para>
        ///     <para>Returns the following:</para>
        ///     <para> * input - If not cancelled, it contains the text inserted by user.</para>
        ///     <para> * rejected - If cancelled, defines the state of the text dialog.</para>
        /// </summary>
        /// <param name="message" type="String">
        ///     Text to display to the user
        /// </param>
        /// <param name="showOk" type="Boolean">
        ///     Set to true if a OK button should be displayed
        /// </param>
        /// <param name="showCancel" type="Boolean">
        ///     Set to true if a Cancel button should be displayed
        /// </param>
        /// <returns type="Object">Result</returns>
    },
    "systemIpAddress": function () {
        /// <summary>
        ///     Returns the system's IP address.
        /// </summary>
        /// <returns type="String">IP</returns>
    },
    "webpopup": function () { //TODO
        /// <summary>
        ///     No documentation available yet.
        /// </summary>
    },
    "md5digest": function (string) {
        /// <summary>
        ///     Returns the MD5 representation of a string.
        /// </summary>
        /// <param name="string" type="String">
        ///     Text to encode.
        /// </param>
        /// <returns type="String">MD5 representation</returns>
    },
    "sha1digest": function (string) {
        /// <summary>
        ///     Returns the SHA1 representation of a string.
        /// </summary>
        /// <param name="string" type="String">
        ///     Text to encode.
        /// </param>
        /// <returns type="String">SHA1 representation</returns>
    },
    "xmlrpc": function () {
        /// <summary>
        ///     No documentation available yet.
        /// </summary>
    },
    "getSubtitleLanguages": function () {
        /// <summary>
        ///     Returns a comma-separated list of subtitles' languages specified by user in Settings page.
        /// </summary>
        /// <returns type="String">List of languages</returns>
    }
};