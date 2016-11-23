(function() {var implementors = {};
implementors["bincode"] = ["impl&lt;'a,&nbsp;W:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a>&gt; <a class='trait' href='serde/ser/trait.Serializer.html' title='serde::ser::Serializer'>Serializer</a> for <a class='struct' href='bincode/serde/struct.Serializer.html' title='bincode::serde::Serializer'>Serializer</a>&lt;'a,&nbsp;W&gt;",];implementors["plist"] = ["impl&lt;W:&nbsp;<a class='trait' href='plist/trait.EventWriter.html' title='plist::EventWriter'>EventWriter</a>&gt; <a class='trait' href='serde/ser/trait.Serializer.html' title='serde::ser::Serializer'>SerdeSerializer</a> for <a class='struct' href='plist/struct.Serializer.html' title='plist::Serializer'>Serializer</a>&lt;W&gt;",];implementors["syntect"] = ["impl&lt;W&gt; <a class='trait' href='serde/ser/trait.Serializer.html' title='serde::ser::Serializer'>Serializer</a> for <a class='struct' href='plist/ser/struct.Serializer.html' title='plist::ser::Serializer'>Serializer</a>&lt;W&gt; <span class='where'>where W: <a class='trait' href='plist/trait.EventWriter.html' title='plist::EventWriter'>EventWriter</a></span>",];implementors["syntect"] = ["impl&lt;'a,&nbsp;W&gt; <a class='trait' href='serde/ser/trait.Serializer.html' title='serde::ser::Serializer'>Serializer</a> for <a class='struct' href='bincode/serde/writer/struct.Serializer.html' title='bincode::serde::writer::Serializer'>Serializer</a>&lt;'a,&nbsp;W&gt; <span class='where'>where W: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a></span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
