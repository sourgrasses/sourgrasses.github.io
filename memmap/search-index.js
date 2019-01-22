crystal_doc_search_index_callback({"repository_name":"github.com/sourgrasses/memmap.cr","body":"# memmap.cr\n[![Build Status](https://travis-ci.org/sourgrasses/memmap.cr.svg?branch=master)](https://travis-ci.org/sourgrasses/memmap.cr/)\n[![Crystal Docs](https://img.shields.io/badge/Crystal-Docs-8A2BE2.svg)](https://sourgrasses.github.io/memmap/)\n\nLittle lib to make using [`mmap()`](http://man7.org/linux/man-pages/man2/mmap.2.html) and related system calls relatively easy and hopefully fairly idiomatic.\n\nCurrently you can use either the `<<` operator/`push` function to append `Bytes` to a mapped file, which calls `ftruncate` to expand te file size to fit the new data, advances the seek pointer to the old end of the file, writes whatever has been pushed, and calls `mremap` on Linux or simply `munmap` and then `mmap` elsewhere, or, if you prefer to copy the contents of the mapped file to a new mapped file with the new `Bytes` appended, you can call `MapFile.write` to `ftruncate` a file, create a new mapped buffer of the fixed size, and `memcpy` from the read buffer and the `Bytes` to be appended into the second buffer.\n\nCalling the instance method `value` gets a `Bytes`/`Slice(UInt8)` that can be read from and manipulated in place safely.\n\nWritten with continual reference to the [memmap crate](https://github.com/danburkert/memmap-rs) for Rust.\n\n## Installation\n\nAdd this to your application's `shard.yml`:\n\n```yaml\ndependencies:\n  memmap:\n    github: sourgrasses/memmap.cr\n```\n\n## Usage\n\n```crystal\nrequire \"memmap\"\n\n# Maps a file named \"test.txt\" and prints it to stdout\nfile = Memmap::MapFile.new(\"test.txt\")\nfile_string = String.new(file.value)\nputs file_string\n\n# Maps a file and replaces every character with 'j'\nfile2 = Memmap::MapFile.new(\"test.txt\", mode = \"r+\")\nfile2.value.map! { |v| 106.to_u8 }\nfile2.flush()\n\n# Maps a file and then appends a string to it\nFile.write(\"test.txt\", \"here are a bunch of bytes yet again\")\n\nfile = Memmap::MapFile.new(\"test.txt\", mode=\"r+\")\nappendix = \" and more!\".to_slice\nfile << appendix\n```\n## Contributing\n\n1. Fork it (<https://github.com/sourgrasses/memmap.cr/fork>)\n2. Create your feature branch (`git checkout -b my-new-feature`)\n3. Commit your changes (`git commit -am 'Add some feature'`)\n4. Push to the branch (`git push origin my-new-feature`)\n5. Create a new Pull Request\n\n## Contributors\n\n- [sourgrasses](https://github.com/sourgrasses) Jenn Wheeler - creator, maintainer\n","program":{"html_id":"github.com/sourgrasses/memmap.cr/toplevel","path":"toplevel.html","kind":"module","full_name":"Top Level Namespace","name":"Top Level Namespace","abstract":false,"superclass":null,"ancestors":[],"locations":[],"repository_name":"github.com/sourgrasses/memmap.cr","program":true,"enum":false,"alias":false,"aliased":"","const":false,"constants":[],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"github.com/sourgrasses/memmap.cr/Memmap","path":"Memmap.html","kind":"module","full_name":"Memmap","name":"Memmap","abstract":false,"superclass":null,"ancestors":[],"locations":[{"filename":"memmap/unix.cr","line_number":3,"url":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr"},{"filename":"memmap/version.cr","line_number":1,"url":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/version.cr"},{"filename":"memmap.cr","line_number":3,"url":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap.cr"}],"repository_name":"github.com/sourgrasses/memmap.cr","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[{"id":"VERSION","name":"VERSION","value":"\"0.1.0\"","doc":null,"summary":null}],"included_modules":[],"extended_modules":[{"html_id":"github.com/sourgrasses/memmap.cr/Memmap","kind":"module","full_name":"Memmap","name":"Memmap"}],"subclasses":[],"including_types":[],"namespace":null,"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[],"macros":[],"types":[{"html_id":"github.com/sourgrasses/memmap.cr/Memmap/Flag","path":"Memmap/Flag.html","kind":"enum","full_name":"Memmap::Flag","name":"Flag","abstract":false,"superclass":null,"ancestors":[{"html_id":"github.com/sourgrasses/memmap.cr/Enum","kind":"struct","full_name":"Enum","name":"Enum"},{"html_id":"github.com/sourgrasses/memmap.cr/Comparable","kind":"module","full_name":"Comparable","name":"Comparable"},{"html_id":"github.com/sourgrasses/memmap.cr/Value","kind":"struct","full_name":"Value","name":"Value"},{"html_id":"github.com/sourgrasses/memmap.cr/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"memmap/unix.cr","line_number":6,"url":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr"}],"repository_name":"github.com/sourgrasses/memmap.cr","program":false,"enum":true,"alias":false,"aliased":"","const":false,"constants":[{"id":"Shared","name":"Shared","value":"1","doc":null,"summary":null},{"id":"Private","name":"Private","value":"2","doc":null,"summary":null},{"id":"Fixed","name":"Fixed","value":"16","doc":null,"summary":null},{"id":"Anon","name":"Anon","value":"32","doc":null,"summary":null}],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"github.com/sourgrasses/memmap.cr/Memmap","kind":"module","full_name":"Memmap","name":"Memmap"},"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[{"id":"anon?-instance-method","html_id":"anon?-instance-method","name":"anon?","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L10","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L10","def":{"name":"anon?","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"self == Anon"}},{"id":"fixed?-instance-method","html_id":"fixed?-instance-method","name":"fixed?","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L9","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L9","def":{"name":"fixed?","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"self == Fixed"}},{"id":"private?-instance-method","html_id":"private?-instance-method","name":"private?","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L8","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L8","def":{"name":"private?","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"self == Private"}},{"id":"shared?-instance-method","html_id":"shared?-instance-method","name":"shared?","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L7","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L7","def":{"name":"shared?","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"self == Shared"}}],"macros":[],"types":[]},{"html_id":"github.com/sourgrasses/memmap.cr/Memmap/MapFile","path":"Memmap/MapFile.html","kind":"class","full_name":"Memmap::MapFile","name":"MapFile","abstract":false,"superclass":{"html_id":"github.com/sourgrasses/memmap.cr/Reference","kind":"class","full_name":"Reference","name":"Reference"},"ancestors":[{"html_id":"github.com/sourgrasses/memmap.cr/Reference","kind":"class","full_name":"Reference","name":"Reference"},{"html_id":"github.com/sourgrasses/memmap.cr/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"memmap/unix.cr","line_number":26,"url":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr"}],"repository_name":"github.com/sourgrasses/memmap.cr","program":false,"enum":false,"alias":false,"aliased":"","const":false,"constants":[{"id":"DEFAULT_PERM","name":"DEFAULT_PERM","value":"File::Permissions.new(420)","doc":null,"summary":null},{"id":"PAGE_SIZE","name":"PAGE_SIZE","value":"(LibC.sysconf(LibC::SC_PAGESIZE)).to_u64","doc":null,"summary":null}],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"github.com/sourgrasses/memmap.cr/Memmap","kind":"module","full_name":"Memmap","name":"Memmap"},"doc":"A memory mapped buffer backed by a specified file.\n\nThe safest way to access the data mapped is through the `value` getter, which returns a `Slice(UInt8)`.\nAny access through the raw pointer interface can cause segmentation faults or undefined behavior unless you're really careful, \nwhile accessing the buffer through a `Slice` allows you to reap the potential benefits of using `mmap` without shooting\nyourself in the foot because of its bound checks.","summary":"<p>A memory mapped buffer backed by a specified file.</p>","class_methods":[],"constructors":[{"id":"new(filepath:String,mode=&quot;r&quot;,offset:LibC::SizeT=0)-class-method","html_id":"new(filepath:String,mode=&amp;quot;r&amp;quot;,offset:LibC::SizeT=0)-class-method","name":"new","doc":"Create an instance of `MapFile`.","summary":"<p>Create an instance of <code><a href=\"../Memmap/MapFile.html\">MapFile</a></code>.</p>","abstract":false,"args":[{"name":"filepath","doc":null,"default_value":"","external_name":"filepath","restriction":"String"},{"name":"mode","doc":null,"default_value":"\"r\"","external_name":"mode","restriction":""},{"name":"offset","doc":null,"default_value":"0","external_name":"offset","restriction":"LibC::SizeT"}],"args_string":"(filepath : String, mode = <span class=\"s\">&quot;r&quot;</span>, offset : LibC::SizeT = <span class=\"n\">0</span>)","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L44","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L44","def":{"name":"new","args":[{"name":"filepath","doc":null,"default_value":"","external_name":"filepath","restriction":"String"},{"name":"mode","doc":null,"default_value":"\"r\"","external_name":"mode","restriction":""},{"name":"offset","doc":null,"default_value":"0","external_name":"offset","restriction":"LibC::SizeT"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"_ = allocate\n_.initialize(filepath, mode, offset)\nif _.responds_to?(:finalize)\n  ::GC.add_finalizer(_)\nend\n_\n"}}],"instance_methods":[{"id":"<<(appendix:Bytes)-instance-method","html_id":"&lt;&lt;(appendix:Bytes)-instance-method","name":"<<","doc":null,"summary":null,"abstract":false,"args":[{"name":"appendix","doc":null,"default_value":"","external_name":"appendix","restriction":"Bytes"}],"args_string":"(appendix : Bytes)","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L87","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L87","def":{"name":"<<","args":[{"name":"appendix","doc":null,"default_value":"","external_name":"appendix","restriction":"Bytes"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"push(appendix)"}},{"id":"as_ptr:Pointer(UInt8)-instance-method","html_id":"as_ptr:Pointer(UInt8)-instance-method","name":"as_ptr","doc":"Returns the buffer as a raw `Pointer(UInt8)`. This is unsafe, obviously.","summary":"<p>Returns the buffer as a raw <code>Pointer(UInt8)</code>.</p>","abstract":false,"args":[],"args_string":" : Pointer(UInt8)","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L134","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L134","def":{"name":"as_ptr","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@map"}},{"id":"close-instance-method","html_id":"close-instance-method","name":"close","doc":"Force the map to close before the GC runs `finalize`","summary":"<p>Force the map to close before the GC runs <code>finalize</code></p>","abstract":false,"args":[],"args_string":"","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L139","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L139","def":{"name":"close","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"len = get_aligned_len()\nif (LibC.munmap(@map, len)) == -1\n  raise(Errno.new(\"Error unmapping file\"))\nend\n"}},{"id":"flush-instance-method","html_id":"flush-instance-method","name":"flush","doc":"Flush changes made in the map back into the filesystem. Synchronous/blocking version.","summary":"<p>Flush changes made in the map back into the filesystem.</p>","abstract":false,"args":[],"args_string":"","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L147","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L147","def":{"name":"flush","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"LibC.msync(@map, @len, LibC::MS_SYNC)"}},{"id":"make_read_only-instance-method","html_id":"make_read_only-instance-method","name":"make_read_only","doc":"Call `mprotect` to change the 'prot' flags to be read-only","summary":"<p>Call <code>mprotect</code> to change the 'prot' flags to be read-only</p>","abstract":false,"args":[],"args_string":"","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L156","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L156","def":{"name":"make_read_only","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"len = get_aligned_len()\nLibC.mprotect(@map, len, Prot::Read)\n"}},{"id":"make_writable-instance-method","html_id":"make_writable-instance-method","name":"make_writable","doc":"Call `mprotect` to change the 'prot' flags to allow reading and writing","summary":"<p>Call <code>mprotect</code> to change the 'prot' flags to allow reading and writing</p>","abstract":false,"args":[],"args_string":"","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L162","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L162","def":{"name":"make_writable","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"len = get_aligned_len()\nLibC.mprotect(@map, len, Prot::ReadWrite)\n"}},{"id":"push(appendix:Bytes)-instance-method","html_id":"push(appendix:Bytes)-instance-method","name":"push","doc":"Append a `Slice(UInt8)`/`Bytes` to a mapped file by calling `ftruncate` on the mapped file's\nfdesc, `lseek`ing to the 'old' end of the file, writing the `Bytes` to the file, and either\ncalling `mremap` if we're on Linux or `munmap` and then `mmap` if we're on macOS/FreeBSD/whatever.","summary":"<p>Append a <code>Slice(UInt8)</code>/<code>Bytes</code> to a mapped file by calling <code>ftruncate</code> on the mapped file's fdesc, <code>lseek</code>ing to the 'old' end of the file, writing the <code>Bytes</code> to the file, and either calling <code>mremap</code> if we're on Linux or <code>munmap</code> and then <code>mmap</code> if we're on macOS/FreeBSD/whatever.</p>","abstract":false,"args":[{"name":"appendix","doc":null,"default_value":"","external_name":"appendix","restriction":"Bytes"}],"args_string":"(appendix : Bytes)","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L94","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L94","def":{"name":"push","args":[{"name":"appendix","doc":null,"default_value":"","external_name":"appendix","restriction":"Bytes"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"if @prot = Prot::ReadWrite\nelse\n  raise(Errno.new(\"File not mapped with read/write permission\"))\nend\naligned_len = get_aligned_len()\nnew_len = aligned_len + appendix.size\nif (LibC.ftruncate(@fd, new_len)) == -1\n  raise(Errno.new(\"Error truncating file to new length\"))\nend\nif (LibC.lseek(@fd, aligned_len, LibC::SEEK_SET)) == -1\n  raise(Errno.new(\"Error lseeking to offset #{@len}\"))\nend\nif (LibC.write(@fd, appendix.to_unsafe, appendix.size)) == -1\n  raise(Errno.new(\"Error appending to file\"))\nend\n{% if flag?(:linux) %}\n        ptr = LibC.mremap(@map, aligned_len, new_len, LibC::MREMAP_MAYMOVE)\n        if ptr == LibC::MAP_FAILED\n         raise Errno.new(\"Error remapping file\")\n        elsif ptr.address != @map.address\n          @map = Pointer(UInt8).new(ptr.address)\n        end\n      {% else %}\n        aligned_offset = @offset - (@offset % PAGE_SIZE)\n        if LibC.munmap(@map, aligned_len) == -1\n         raise Errno.new(\"Error remapping file\")\n        end\n\n        ptr = LibC.mmap(@map, aligned_len, @prot.value, @flag.value, @fd, aligned_offset)\n        if ptr == LibC::MAP_FAILED\n         raise Errno.new(\"Error remapping file\")\n        end\n        @map = Pointer(UInt8).new(ptr.address)\n      {% end %}\n@len = new_len\n@value = Slice.new(@map, @len)\n"}},{"id":"read(slice:Bytes)-instance-method","html_id":"read(slice:Bytes)-instance-method","name":"read","doc":null,"summary":null,"abstract":false,"args":[{"name":"slice","doc":null,"default_value":"","external_name":"slice","restriction":"Bytes"}],"args_string":"(slice : Bytes)","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L171","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L171","def":{"name":"read","args":[{"name":"slice","doc":null,"default_value":"","external_name":"slice","restriction":"Bytes"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"slice.size.times do |i|\n  @value[i]\nend\n@value = @value + slice.size\nslice.size\n"}},{"id":"to_s-instance-method","html_id":"to_s-instance-method","name":"to_s","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L167","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L167","def":{"name":"to_s","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@value.to_s"}},{"id":"value:Slice(UInt8)-instance-method","html_id":"value:Slice(UInt8)-instance-method","name":"value","doc":null,"summary":null,"abstract":false,"args":[],"args_string":" : Slice(UInt8)","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L41","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L41","def":{"name":"value","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"@value"}},{"id":"write(filepath:String,appendix:Bytes):Symbol-instance-method","html_id":"write(filepath:String,appendix:Bytes):Symbol-instance-method","name":"write","doc":"Append a `Slice(UInt8)`/`Bytes` to a mapped file by writing the already-mapped buffer concatenated\nwith the new bytes to a newly allocated mapped buffer backed by a new file.\nThis relies on `ftruncate` and some pointer arithmetic to work correctly, so tread carefully.\nIf you point it in the wrong direction it will eat your data.","summary":"<p>Append a <code>Slice(UInt8)</code>/<code>Bytes</code> to a mapped file by writing the already-mapped buffer concatenated with the new bytes to a newly allocated mapped buffer backed by a new file.</p>","abstract":false,"args":[{"name":"filepath","doc":null,"default_value":"","external_name":"filepath","restriction":"String"},{"name":"appendix","doc":null,"default_value":"","external_name":"appendix","restriction":"Bytes"}],"args_string":"(filepath : String, appendix : Bytes) : Symbol","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L181","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L181","def":{"name":"write","args":[{"name":"filepath","doc":null,"default_value":"","external_name":"filepath","restriction":"String"},{"name":"appendix","doc":null,"default_value":"","external_name":"appendix","restriction":"Bytes"}],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"Symbol","visibility":"Public","body":"len = get_aligned_len() + appendix.size\nFile.write(filepath, \"\\u0000\")\nfd = (File.open(filepath, mode = \"r+\", perm = DEFAULT_PERM)).fd\nif (LibC.ftruncate(fd, len)) == -1\n  return :err\nend\nptr = LibC.mmap(Pointer(Void).null, len, Prot::ReadWrite, Flag::Shared, fd, @offset)\nptr = Pointer(UInt8).new(ptr.address)\n@map.copy_to(ptr, get_aligned_len())\nappendix.copy_to(ptr + get_aligned_len(), appendix.size)\nLibC.msync(ptr, len, LibC::MS_SYNC)\nif (LibC.munmap(ptr, len)) == -1\n  return :err\nend\n:ok\n"}}],"macros":[],"types":[]},{"html_id":"github.com/sourgrasses/memmap.cr/Memmap/Prot","path":"Memmap/Prot.html","kind":"enum","full_name":"Memmap::Prot","name":"Prot","abstract":false,"superclass":null,"ancestors":[{"html_id":"github.com/sourgrasses/memmap.cr/Enum","kind":"struct","full_name":"Enum","name":"Enum"},{"html_id":"github.com/sourgrasses/memmap.cr/Comparable","kind":"module","full_name":"Comparable","name":"Comparable"},{"html_id":"github.com/sourgrasses/memmap.cr/Value","kind":"struct","full_name":"Value","name":"Value"},{"html_id":"github.com/sourgrasses/memmap.cr/Object","kind":"class","full_name":"Object","name":"Object"}],"locations":[{"filename":"memmap/unix.cr","line_number":13,"url":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr"}],"repository_name":"github.com/sourgrasses/memmap.cr","program":false,"enum":true,"alias":false,"aliased":"","const":false,"constants":[{"id":"Read","name":"Read","value":"1","doc":null,"summary":null},{"id":"Write","name":"Write","value":"2","doc":null,"summary":null},{"id":"ReadWrite","name":"ReadWrite","value":"3","doc":null,"summary":null},{"id":"None","name":"None","value":"0","doc":null,"summary":null}],"included_modules":[],"extended_modules":[],"subclasses":[],"including_types":[],"namespace":{"html_id":"github.com/sourgrasses/memmap.cr/Memmap","kind":"module","full_name":"Memmap","name":"Memmap"},"doc":null,"summary":null,"class_methods":[],"constructors":[],"instance_methods":[{"id":"none?-instance-method","html_id":"none?-instance-method","name":"none?","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L17","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L17","def":{"name":"none?","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"self == None"}},{"id":"read?-instance-method","html_id":"read?-instance-method","name":"read?","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L14","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L14","def":{"name":"read?","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"self == Read"}},{"id":"read_write?-instance-method","html_id":"read_write?-instance-method","name":"read_write?","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L16","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L16","def":{"name":"read_write?","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"self == ReadWrite"}},{"id":"write?-instance-method","html_id":"write?-instance-method","name":"write?","doc":null,"summary":null,"abstract":false,"args":[],"args_string":"","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L15","source_link":"https://github.com/sourgrasses/memmap.cr/blob/c8ea71fd80e4cb4b2c30d490bbe1d2d0dbd7744e/src/memmap/unix.cr#L15","def":{"name":"write?","args":[],"double_splat":null,"splat_index":null,"yields":null,"block_arg":null,"return_type":"","visibility":"Public","body":"self == Write"}}],"macros":[],"types":[]}]}]}})