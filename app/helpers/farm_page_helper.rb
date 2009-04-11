module Merb
  module FarmPageHelper
    def js_escaped_array(array)
      "[%s]" % array.map{|i| "'%s'" % escape_js(i)}.join(', ')
    end

    def boids_chars(farm)
      js_escaped_array(farm.yaks.map{|y| y.name || "(no name)"})
    end

    def boids_notes(farm)
      js_escaped_array(farm.yaks.map{|y| (y.user || User.nora).login})
    end
  end
end # Merb
