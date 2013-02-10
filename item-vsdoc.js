var item_ = {
    "onEvent": function (event, handler) {
        /// <summary>
        ///     Install an event handler for the specific item. If event is 'null' all events will be passed to the handler. The first argument to the handler is a string with the event name.
        ///     <para>Available from 3.99.357</para>
        /// </summary>
        /// <param name="event" type="String">
        ///     Name of the event to associate to the handler.
        /// </param>
        /// <param name="handler" type="Function">
        ///     Function to be executed when event is called.
        /// </param>
    },
    "destroy": function () {
        /// <summary>
        ///     Remove the item from the page.
        ///     <para>Available from 3.99.357</para>
        /// </summary>
    },
    "addOptURL": function (title, url) {
        /// <summary>
        ///     Adds an entry in item's context-menu.
        ///     <para>When clicked, redirects user to the url specified.</para>
        ///     <para>Available from 3.99.357</para>
        /// </summary>
        /// <param name="title" type="String">
        ///     Title of the option.
        /// </param>
        /// <param name="url" type="String">
        ///     Path to redirect to.
        /// </param>
    },
    "addOptAction": function (title, event) {
        /// <summary>
        ///     Add an additional event for the item. When trigged by the user it can be intercepted using an event handler registered using the item's onEvent() method.
        ///     <para>Available from 3.99.357</para>
        /// </summary>
        /// <param name="title" type="String">
        ///     Title of the option.
        /// </param>
        /// <param name="event" type="String">
        ///     Name of the event handler created with onEvent.
        /// </param>
    },
    "addOptSeparator": function (title) {
        /// <summary>
        ///     Add a separator that separates content by sections.
        ///     <para>Available from 3.99.428</para>
        /// </summary>
        /// <param name="title" type="String">
        ///     Title of the next section.
        /// </param>
    },
    "dump": function () {
        /// <summary>
        ///     Obtains a dump of the current item;
        /// </summary>
    },
    "enable": function () {
        /// <summary>
        ///     Enables item.
        /// </summary>
    },
    "disable": function () {
        /// <summary>
        ///     Disables item.
        /// </summary>
    },
    "moveBefore": function (index) {
        /// <summary>
        ///     Moves current item to before an item in position specified by index in the current page.
        /// </summary>
        /// <param name="index" type="Integer">
        ///     Index of the item in which is to move current item to before of.
        /// </param>
    },
    "bindVideoMetadata": function (metadata) {
        /// <summary>
        ///     Binds video metadata to current item.
        /// </summary>
        /// <param name="metadata" type="Object">
        ///     Object with metadata to associate to current item.
        ///     <para>Current fields used are:</para>
        ///     <para> * filename: Name of the file.</para>
        ///     <para> * year: Year.</para>
        ///     <para> * title: Title of the video.</para>
        ///     <para> * season: Season number of TV Show.</para>
        ///     <para> * episode: Episode number of TV Show.</para>
        ///     <para> * imdb: IMDb ID of the video.</para>
        ///     <para> * duration: Duration of the video.</para>
        /// </param>
    }
};