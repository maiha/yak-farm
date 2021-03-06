# dependencies are generated using a strict version, don't forget to edit the dependency versions when upgrading.
merb_gems_version = "1.0.11"
dm_gems_version   = "0.9.11"
do_gems_version   = "0.9.11"

# For more information about each component, please read http://wiki.merbivore.com/faqs/merb_components
dependency "merb-core", merb_gems_version 
dependency "merb-action-args", merb_gems_version
dependency "merb-assets", merb_gems_version  
dependency "merb-helpers", merb_gems_version 
dependency "merb-exceptions", merb_gems_version

dependency "data_objects", do_gems_version
dependency "do_sqlite3", do_gems_version # If using another database, replace this
dependency "dm-core", dm_gems_version         
dependency "dm-types", dm_gems_version        

dependency "merb_datamapper", merb_gems_version
