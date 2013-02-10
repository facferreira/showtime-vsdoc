/// <var>When a plugin is loaded it will be so with an associated plugin object. The object can not be altered from the script (IE, no new properties can be defined on the object).</var>
var plugin_ = {
    /// <field name='url' static='false' type='String'>
    ///     URL to the plugin's javascript file
    /// </field>
    "url": null,

    /// <field name='path' static='false' type='String'>
    ///     Path to the plugin root. This should be used to form fully qualified URLs to plugin resources (icons, etc)
    /// </field>
    "path": null,

    /// <field name='URIRouting' static='false' type='Boolean'>
    ///     If set to 'true' the plugin will participate in URI routing. IE. the handlers registered via plugin.addURI() will be invoked when a URI is opened that matches the registered regexp. The default value is 'true'. This value can be modified by the plugin itself (Usually via a setting)
    /// </field>
    "URIRouting": null,

    /// <field name='search' static='false' type='Boolean'>
    ///      If set to 'true' the plugin will participate in search requests. IE. the handlers registered via plugin.addSearcher() will be invoked on search requests. The default value is 'true'. This value can be modified by the plugin itself (Usually via a setting)
    /// </field>
    "search": null,

    "forceUnload": function () {
        /// <summary>
        ///     Forces plugin to unload.
        /// </summary>
    },
    "getDescriptor": function () {
        /// <summary>
        ///     Parses each element of plugin.json to plugin object.
        /// </summary>
        /// <returns type="Object"></returns>
    },
    "cachePut": function (name, key, values, expire) {
        /// <summary>
        ///     Stores a json object in Cache, expiring seconds after the colocation in cache (value given by Expire).
        /// </summary>
        /// <param name="name" type="String">
        ///     Name of the parent cache indexer that will contain the entry.
        /// </param>
        /// <param name="key" type="String">
        ///     Key of the entry.
        /// </param>
        /// <param name="values" type="Object">
        ///     Values to store in cache.
        /// </param>
        /// <param name="expire" type="Integer">
        ///     Duration in which this key should be stored
        /// </param>
    },
    "cacheGet": function (name, key) {
        /// <summary>
        ///     Parses the json object in Cache with key equal to Key and name of Cache equal to Name.
        /// </summary>
        /// <param name="name" type="String">
        ///     Name of the parent cache indexer that contains the entry.
        /// </param>
        /// <param name="key" type="String">
        ///     Key of the entry to obtain.
        /// </param>
        /// <returns type="Object"></returns>
    },
    "addURI": function (regexp, handler) {
        /// <summary>
        ///     Add a function for handling a URI matched by a regexp. This is a central function for adding browse pages that a user can navigate to.
        /// </summary>
        /// <param name="regexp" type="String">
        ///     Regular expression matching the URI
        /// </param>
        /// <param name="handler" type="Function">
        ///     Function to be invoked when the URI is opened
        ///     <para>The Handler is called with one or more arguments. The first argument is always the page object. The second and further arguments are sub-strings as matched by the regexp</para>
        /// </param>
    },
    "addSearcher": function (title, icon, handler) {
        /// <summary>
        ///     Add a searcher handler when universal search is used.
        /// </summary>
        /// <param name="title" type="String">
        ///     Title of the searcher.
        /// </param>
        /// <param name="icon" type="String">
        ///     Image to show that identifies this searcher in the search results.
        /// </param>
        /// <param name="handler" type="Function">
        ///     Function to be invoked when the searcher is called.
        ///     <para>Note: This function should contain a positive value set to page.entries in order to this searcher being displayed.</para>
        /// </param>
    },
    "addHTTPAuth": function (regexp, handler) {
        /// <summary>
        ///     Add a handler for authenticating HTTP requests.
        ///     <para>Plugins may add handlers for dealing with authentications for various URLs. This is typically used for OAuth based streaming services and such. Even though the browsing and searching of content is handled in the plugin the actual streaming of Audio / Video never passes through the plugin itself. To make it possible to authenticate requests which are not touched by the plugins (and to ease authentication of requests from within the plugin itself) the plugin can register HTTPAuth handlers.</para>
        /// </summary>
        /// <param name="regexp" type="String">
        ///     Regular expression matching the URIs for which to handle authentication.
        /// </param>
        /// <param name="handler" type="Function">
        ///     Function invoked when requests needs to be authenticated.
        ///     <para>The handler is invoked with one argument 'A authreq object' and the plugin should return true to indicate that the authentication was successful, false otherwise.</para>
        ///     <para>The authreq object has these methods:</para>
        ///     <para> * oauthToken(String ConsumerKey, String ConsumerSecret, String UserToken, String UserSecret) If you need to use OAuth 1.0 you know what those are for and how to get them</para>
        ///     <para> * rawAuth(String data) Just send raw data as the HTTP Authentication Header. This can be used for a variety of things, including OAuth 2.0</para>
        /// </param>
    },
    "createService": function (title, url, type, enabled, icon) {
        /// <summary>
        ///     Create a service (that will appear on the home screen) and return an Object representing the service.
        ///     <para>The created service is resource-tracked and will be removed when the plugin is unloaded (or reloaded)</para>
        /// </summary>
        /// <param name="title" type="String">
        ///     Display name of the service
        /// </param>
        /// <param name="url" type="String">
        ///     Initial route of the service
        /// </param>
        /// <param name="type" type="String">
        ///     Service type, can be used for grouping the service. This should be any of:
        ///     <para>*video</para>
        ///     <para>*audio</para>
        ///     <para>*tv</para>
        ///     <para>*image</para>
        ///     <para>*other</para>
        /// </param>
        /// <param name="enabled" type="Boolean">
        ///     Sets if service should be enabled. If true, the service may be used.
        /// </param>
        /// <param name="icon" type="String" optional="true">
        ///     Image that identifies the service.
        /// </param>
        /// <returns type="Service Object"></returns>
    },
    "createSettings": function (title, iconURL, description) {
        /// <summary>
        ///     Create a setting group (that will appear in the settings page) and return a settings object.
        ///     <para>The created settings group is resource-tracked and will be removed when the plugin is unloaded (or reloaded). The object has a destroy method that can be used to destroy the object.</para>
        /// </summary>
        /// <param name="title" type="String">
        ///     Display name of the service
        /// </param>
        /// <param name="iconURL" type="String" optional="true">
        ///     URL Path to icon
        /// </param>
        /// <param name="description" type="String" optional="true">
        ///     Long description of the settings
        /// </param>
        /// <returns type="Settings Object"></returns>
    },
    "createStore": function (id, perUser) {
        /// <summary>
        ///     Creates an object that will be persisted on disk.
        ///     <para>Available from 3.1.162</para>
        ///     <para></para>
        ///     <para>The store object is not resource tracked and explicitly destroyed like most other plugin related objects. Rather it is finalized when the Javascript garbage collector will destroy it.</para>
        /// </summary>
        /// <param name="id" type="String">
        ///     Identifies the object. Each plugin can create multiple stores, each with a different ID.
        /// </param>
        /// <param name="perUser" type="Boolean" optional="true">
        ///     When Showtime will support switching between multiple identities this will indicate that the store should be unique per user. This is not something that is currently supported.
        /// </param>
        /// <returns type="Object"></returns>
    },
    "getAuthCredentials": function (source, reason, queryUser, id, forceTemporary) {
        /// <summary>
        ///     Ask the user for authentication credentials.
        /// </summary>
        /// <param name="source" type="String">
        ///     Display name of the service/entity requiring authentication. This should be rather short but should still identify the service uniquely. IE, it should inform the user from what the popup originates.
        /// </param>
        /// <param name="reason" type="String">
        ///     Reason for asking for authentication credentials. This can be things like "Service requires authentication" or in case the user tries a username/password but it fails, it should be something like: "Invalid Password". IE. it should inform the user why the request popped up.
        /// </param>
        /// <param name="queryUser" type="Boolean">
        ///     If set to true the user will be queried for input. If this is false Showtime will only look in the keyring for previously entered credentials.
        /// </param>
        /// <param name="id" type="String" optional="true">
        ///     Extra ID for storing the credentials in the keyring. This will be appended to the plugin's own ID. If you only have one authentication point to worry about you don't need to supply this.
        /// </param>
        /// <param name="forceTemporary" type="Boolean" optional="true">
        ///     Do not allow Showtime to store the credentials on disk. This also removes the 'remember me' option from the popup. Some online services, when using token based authentication, allows Showtime to get a token that can be renewed to retain authentication against the service. For these type of services it makes no sense to store the Username/Password in clear text.
        /// </param>
        /// <returns type="Object"></returns>
    },
    "onEvent": function (event, handler) {
        /// <summary>
        ///     Receive global events.
        ///     <para>Available from 3.5.6</para>
        /// </summary>
        /// <param name="event" type="String">
        ///      Name of the event to listen.
        /// </param>
        /// <param name="handler" type="Function">
        ///      Function to be executed when the event is called.
        /// </param>
    },
    "subscribe": function (name, handler) {
        /// <summary>
        ///     Subscribe to a key.
        /// </summary>
        /// <param name="name" type="String">
        ///     Key of variable to subscribe.
        /// </param>
        /// <param name="handler" type="Function">
        ///     Function invoked when the variable subscribed changes.
        /// </param>
    },
    "addSubtitleProvider": function (handler) {
        /// <summary>
        ///     Function that is called when a user enters a video and if the current plugin is a subtitle provider.
        /// </summary>
        /// <param name="handler" type="Function">
        ///     Function invoked when the plugin is asked for subtitles.
        /// </param>
    }
};