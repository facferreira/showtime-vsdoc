/// <var>When a plugin is loaded it will be so with an associated plugin object. The object can not be altered from the script (IE, no new properties can be defined on the object).</var>
var req_ = {
    /// <field name='title' static='false' type='String'>
    ///      Title of the video
    /// </field>
    "title": null,

    /// <field name='imdb' static='false' type='String'>
    ///      IMDb ID
    /// </field>
    "imdb": null,

    /// <field name='season' static='false' type='Integer'>
    ///      Season number
    /// </field>
    "season": null,

    /// <field name='year' static='false' type='Integer'>
    ///      Year that the video was released
    /// </field>
    "year": null,

    /// <field name='episode' static='false' type='Integer'>
    ///      Episode number
    /// </field>
    "episode": null,

    /// <field name='filesize' static='false' type='Integer'>
    ///      Size of the file
    /// </field>
    "filesize": null,

    /// <field name='opensubhash' static='false' type='String'>
    ///      Hash that can be used with OpenSubtitles
    /// </field>
    "opensubhash": null,

    /// <field name='subdbhash' static='false' type='String'>
    ///      Hash that can be used with SubDB
    /// </field>
    "subdbhash": null,

    /// <field name='duration' static='false' type='Integer'>
    ///      Duration of the video
    /// </field>
    "duration": null,

    "addSubtitle": function (url, title, language, format, source, score) {
        /// <summary>
        ///    Adds a subtitle.
        /// </summary>
        /// <param name="url" type="String">
        ///     Url for the subtitle
        /// </param>
        /// <param name="title" type="String">
        ///     Title of the subtitle
        /// </param>
        /// <param name="language" type="String" optional="true">
        ///     Language code of the subtitle
        /// </param>
        /// <param name="format" type="String" optional="true">
        ///     Format of the subtitle
        /// </param>
        /// <param name="source" type="String" optional="true">
        ///     Source of the subtitle
        /// </param>
        /// <param name="source" type="Integer" optional="true">
        ///     Ranking of the subtitle in comparison to the other subtitles
        /// </param>
    }
};