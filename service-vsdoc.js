/// <var>When a plugin is loaded it will be so with an associated plugin object. The object can not be altered from the script (IE, no new properties can be defined on the object).</var>
var service_ = {
    /// <field name='enabled' static='false' type='Boolean'>
    ///     Boolean value that can be modified from the plugin to enable/disable the service on the home screen
    /// </field>
    "enabled": null,

    "destroy": function () {
        /// <summary>
        ///     Will destroy the service. Note that if the Javascript garbage collector destroys the object the service within showtime will not be removed. The plugin must invoke the destroy() method to remove the service or the user must unload the plugin to remove the service. Therefore if the plugin have no setting for removing the service from the home screen the service can just be created and the returned object can be forgotten about. 
        /// </summary>
    }
};