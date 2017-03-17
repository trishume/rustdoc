(function() {var implementors = {};
implementors["bincode"] = ["impl&lt;'a, R:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a>&gt; <a class='trait' href='serde/de/trait.Deserializer.html' title='serde::de::Deserializer'>Deserializer</a> for <a class='struct' href='bincode/serde/struct.Deserializer.html' title='bincode::serde::Deserializer'>Deserializer</a>&lt;'a, R&gt;",];
implementors["plist"] = ["impl&lt;'a, I&gt; <a class='trait' href='serde/de/trait.Deserializer.html' title='serde::de::Deserializer'>Deserializer</a> for &amp;'a mut <a class='struct' href='plist/serde/struct.Deserializer.html' title='plist::serde::Deserializer'>Deserializer</a>&lt;I&gt; <span class='where fmt-newline'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.IntoIterator.html' title='core::iter::traits::IntoIterator'>IntoIterator</a>&lt;Item=<a class='enum' href='https://doc.rust-lang.org/nightly/core/result/enum.Result.html' title='core::result::Result'>Result</a>&lt;<a class='enum' href='plist/enum.PlistEvent.html' title='plist::PlistEvent'>PlistEvent</a>, <a class='enum' href='plist/enum.Error.html' title='plist::Error'>Error</a>&gt;&gt;</span>",];
implementors["serde"] = [];
implementors["syntect"] = ["impl&lt;'a, I&gt; <a class='trait' href='serde/de/trait.Deserializer.html' title='serde::de::Deserializer'>Deserializer</a> for &amp;'a mut <a class='struct' href='plist/serde/de/struct.Deserializer.html' title='plist::serde::de::Deserializer'>Deserializer</a>&lt;I&gt; <span class='where fmt-newline'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/traits/trait.IntoIterator.html' title='core::iter::traits::IntoIterator'>IntoIterator</a>&lt;Item=<a class='enum' href='https://doc.rust-lang.org/nightly/core/result/enum.Result.html' title='core::result::Result'>Result</a>&lt;<a class='enum' href='plist/enum.PlistEvent.html' title='plist::PlistEvent'>PlistEvent</a>, <a class='enum' href='plist/enum.Error.html' title='plist::Error'>Error</a>&gt;&gt;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
