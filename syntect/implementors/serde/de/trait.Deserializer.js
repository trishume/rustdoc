(function() {var implementors = {};
implementors["serde"] = [];implementors["plist"] = ["impl&lt;I&gt; <a class='trait' href='serde/de/trait.Deserializer.html' title='serde::de::Deserializer'>SerdeDeserializer</a> for <a class='struct' href='plist/struct.Deserializer.html' title='plist::Deserializer'>Deserializer</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.IntoIterator.html' title='core::iter::traits::IntoIterator'>IntoIterator</a>&lt;Item=<a class='enum' href='https://doc.rust-lang.org/nightly/core/result/enum.Result.html' title='core::result::Result'>Result</a>&lt;<a class='enum' href='plist/enum.PlistEvent.html' title='plist::PlistEvent'>PlistEvent</a>, <a class='enum' href='plist/enum.Error.html' title='plist::Error'>Error</a>&gt;&gt;</span>",];implementors["bincode"] = ["impl&lt;'a, R: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a>&gt; <a class='trait' href='serde/de/trait.Deserializer.html' title='serde::de::Deserializer'>Deserializer</a> for <a class='struct' href='bincode/serde/struct.Deserializer.html' title='bincode::serde::Deserializer'>Deserializer</a>&lt;'a, R&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
