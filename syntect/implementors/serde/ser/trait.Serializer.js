(function() {var implementors = {};
implementors["bincode"] = ["impl&lt;'a, W:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a>&gt; <a class='trait' href='serde/ser/trait.Serializer.html' title='serde::ser::Serializer'>Serializer</a> for <a class='struct' href='bincode/serde/struct.Serializer.html' title='bincode::serde::Serializer'>Serializer</a>&lt;'a, W&gt;",];
implementors["plist"] = ["impl&lt;'a, W:&nbsp;<a class='trait' href='plist/trait.EventWriter.html' title='plist::EventWriter'>EventWriter</a>&gt; <a class='trait' href='serde/ser/trait.Serializer.html' title='serde::ser::Serializer'>Serializer</a> for &amp;'a mut <a class='struct' href='plist/serde/struct.Serializer.html' title='plist::serde::Serializer'>Serializer</a>&lt;W&gt;",];
implementors["syntect"] = ["impl&lt;'a, W&gt; <a class='trait' href='serde/ser/trait.Serializer.html' title='serde::ser::Serializer'>Serializer</a> for &amp;'a mut <a class='struct' href='plist/serde/ser/struct.Serializer.html' title='plist::serde::ser::Serializer'>Serializer</a>&lt;W&gt; <span class='where'>where W: <a class='trait' href='plist/trait.EventWriter.html' title='plist::EventWriter'>EventWriter</a></span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
