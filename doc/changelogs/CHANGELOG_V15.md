# Node.js 15 ChangeLog

<!--lint disable prohibited-strings-->
<!--lint disable maximum-line-length-->
<!--lint disable no-literal-urls-->

<table>
<tr>
<th>Current</th>
</tr>
<tr>
<td>
<a href="#15.0.0">15.0.0</a><br/>
</td>
</tr>
</table>

* Other Versions
  * [14.x](CHANGELOG_V14.md)
  * [13.x](CHANGELOG_V13.md)
  * [12.x](CHANGELOG_V12.md)
  * [11.x](CHANGELOG_V11.md)
  * [10.x](CHANGELOG_V10.md)
  * [9.x](CHANGELOG_V9.md)
  * [8.x](CHANGELOG_V8.md)
  * [7.x](CHANGELOG_V7.md)
  * [6.x](CHANGELOG_V6.md)
  * [5.x](CHANGELOG_V5.md)
  * [4.x](CHANGELOG_V4.md)
  * [0.12.x](CHANGELOG_V012.md)
  * [0.10.x](CHANGELOG_V010.md)
  * [io.js](CHANGELOG_IOJS.md)
  * [Archive](CHANGELOG_ARCHIVE.md)

<a id="15.0.0"></a>
## 2020-10-20, Version 15.0.0 (Current), @BethGriggs

### Notable Changes

#### Deprecations and Removals

* [[`41796ebd30`](https://github.com/nodejs/node/commit/41796ebd30)] - **(SEMVER-MAJOR)** **net**: remove long deprecated server.connections property (James M Snell) [#33647](https://github.com/nodejs/node/pull/33647)
* [[`a416692e93`](https://github.com/nodejs/node/commit/a416692e93)] - **(SEMVER-MAJOR)** **repl**: remove deprecated repl.memory function (Ruben Bridgewater) [#33286](https://github.com/nodejs/node/pull/33286)
* [[`f217b2dfb0`](https://github.com/nodejs/node/commit/f217b2dfb0)] - **(SEMVER-MAJOR)** **repl**: remove deprecated repl.turnOffEditorMode() function (Ruben Bridgewater) [#33286](https://github.com/nodejs/node/pull/33286)
* [[`a1bcad8dc0`](https://github.com/nodejs/node/commit/a1bcad8dc0)] - **(SEMVER-MAJOR)** **repl**: remove deprecated repl.parseREPLKeyword() function (Ruben Bridgewater) [#33286](https://github.com/nodejs/node/pull/33286)
* [[`4ace010b53`](https://github.com/nodejs/node/commit/4ace010b53)] - **(SEMVER-MAJOR)** **repl**: remove deprecated bufferedCommand property (Ruben Bridgewater) [#33286](https://github.com/nodejs/node/pull/33286)
* [[`37524307fe`](https://github.com/nodejs/node/commit/37524307fe)] - **(SEMVER-MAJOR)** **repl**: remove deprecated .rli (Ruben Bridgewater) [#33286](https://github.com/nodejs/node/pull/33286)
* [[`a85ce885bd`](https://github.com/nodejs/node/commit/a85ce885bd)] - **(SEMVER-MAJOR)** **src**: remove deprecated node debug command (James M Snell) [#33648](https://github.com/nodejs/node/pull/33648)
* [[`60c4c2b6c5`](https://github.com/nodejs/node/commit/60c4c2b6c5)] - **(SEMVER-MAJOR)** **src**: runtime deprecate process.umask() (Colin Ihrig) [#32499](https://github.com/nodejs/node/pull/32499)

#### Throw On Unhandled Rejections

* TBD

#### Other Notable Changes

* TBD

### Semver-Major Commits

* [[`50228cf6ff`](https://github.com/nodejs/node/commit/50228cf6ff)] - **(SEMVER-MAJOR)** **assert**: add `assert/strict` alias module (ExE Boss) [#34001](https://github.com/nodejs/node/pull/34001)
* [[`a11788736a`](https://github.com/nodejs/node/commit/a11788736a)] - **(SEMVER-MAJOR)** **build**: remove --build-v8-with-gn configure option (Yang Guo) [#27576](https://github.com/nodejs/node/pull/27576)
* [[`89428c7a2d`](https://github.com/nodejs/node/commit/89428c7a2d)] - **(SEMVER-MAJOR)** **build**: drop support for VS2017 (Michaël Zasso) [#33694](https://github.com/nodejs/node/pull/33694)
* [[`2e54524955`](https://github.com/nodejs/node/commit/2e54524955)] - **(SEMVER-MAJOR)** **deps**: update npm to 7.0.0-rc.3 (Myles Borins) [#35474](https://github.com/nodejs/node/pull/35474)
* [[`e983b1cece`](https://github.com/nodejs/node/commit/e983b1cece)] - **(SEMVER-MAJOR)** **deps**: V8: cherry-pick 0d6debcc5f08 (Gus Caplan) [#33600](https://github.com/nodejs/node/pull/33600)
* [[`039cd00a9a`](https://github.com/nodejs/node/commit/039cd00a9a)] - **(SEMVER-MAJOR)** **dns**: add dns/promises alias (shisama) [#32953](https://github.com/nodejs/node/pull/32953)
* [[`c25cf34ac1`](https://github.com/nodejs/node/commit/c25cf34ac1)] - **(SEMVER-MAJOR)** **doc**: move DEP0018 to End-of-Life (Rich Trott) [#35316](https://github.com/nodejs/node/pull/35316)
* [[`8bf37ee496`](https://github.com/nodejs/node/commit/8bf37ee496)] - **(SEMVER-MAJOR)** **doc**: update support macos version for 15.x (Ash Cripps) [#35022](https://github.com/nodejs/node/pull/35022)
* [[`54b36e401d`](https://github.com/nodejs/node/commit/54b36e401d)] - **(SEMVER-MAJOR)** **fs**: reimplement read and write streams using stream.construct (Robert Nagy) [#29656](https://github.com/nodejs/node/pull/29656)
* [[`32b641e528`](https://github.com/nodejs/node/commit/32b641e528)] - **(SEMVER-MAJOR)** **http**: fixed socket.setEncoding fatal error (iskore) [#33405](https://github.com/nodejs/node/pull/33405)
* [[`8a6fab02ad`](https://github.com/nodejs/node/commit/8a6fab02ad)] - **(SEMVER-MAJOR)** **http**: emit 'error' on aborted server request (Robert Nagy) [#33172](https://github.com/nodejs/node/pull/33172)
* [[`d005f490a8`](https://github.com/nodejs/node/commit/d005f490a8)] - **(SEMVER-MAJOR)** **http**: cleanup end argument handling (Robert Nagy) [#31818](https://github.com/nodejs/node/pull/31818)
* [[`f5c0e282cc`](https://github.com/nodejs/node/commit/f5c0e282cc)] - **(SEMVER-MAJOR)** **http2**: allow Host in HTTP/2 requests (Alba Mendez) [#34664](https://github.com/nodejs/node/pull/34664)
* [[`1e4187fcf4`](https://github.com/nodejs/node/commit/1e4187fcf4)] - **(SEMVER-MAJOR)** **http2**: add `invalidheaders` test (Pranshu Srivastava) [#33161](https://github.com/nodejs/node/pull/33161)
* [[`d79c330186`](https://github.com/nodejs/node/commit/d79c330186)] - **(SEMVER-MAJOR)** **http2**: refactor state code validation for the http2Stream class (rickyes) [#33535](https://github.com/nodejs/node/pull/33535)
* [[`df31f71f1e`](https://github.com/nodejs/node/commit/df31f71f1e)] - **(SEMVER-MAJOR)** **http2**: header field valid checks (Pranshu Srivastava) [#33193](https://github.com/nodejs/node/pull/33193)
* [[`c66e6471e7`](https://github.com/nodejs/node/commit/c66e6471e7)] - **(SEMVER-MAJOR)** **lib**: remove ERR\_INVALID\_OPT\_VALUE and ERR\_INVALID\_OPT\_VALUE\_ENCODING (Denys Otrishko) [#34682](https://github.com/nodejs/node/pull/34682)
* [[`b546a2b469`](https://github.com/nodejs/node/commit/b546a2b469)] - **(SEMVER-MAJOR)** **lib**: handle one of args case in ERR\_MISSING\_ARGS (Denys Otrishko) [#34022](https://github.com/nodejs/node/pull/34022)
* [[`a86a295fd7`](https://github.com/nodejs/node/commit/a86a295fd7)] - **(SEMVER-MAJOR)** **lib**: remove NodeError from the prototype of errors with code (Michaël Zasso) [#33857](https://github.com/nodejs/node/pull/33857)
* [[`a8b26d72c5`](https://github.com/nodejs/node/commit/a8b26d72c5)] - **(SEMVER-MAJOR)** **lib**: unflag AbortController (James M Snell) [#33527](https://github.com/nodejs/node/pull/33527)
* [[`74ca960aac`](https://github.com/nodejs/node/commit/74ca960aac)] - **(SEMVER-MAJOR)** **lib**: initial experimental AbortController implementation (James M Snell) [#33527](https://github.com/nodejs/node/pull/33527)
* [[`78ca61e2cf`](https://github.com/nodejs/node/commit/78ca61e2cf)] - **(SEMVER-MAJOR)** **net**: check args in net.connect() and socket.connect() calls (Denys Otrishko) [#34022](https://github.com/nodejs/node/pull/34022)
* [[`41796ebd30`](https://github.com/nodejs/node/commit/41796ebd30)] - **(SEMVER-MAJOR)** **net**: remove long deprecated server.connections property (James M Snell) [#33647](https://github.com/nodejs/node/pull/33647)
* [[`efefdd668d`](https://github.com/nodejs/node/commit/efefdd668d)] - **(SEMVER-MAJOR)** **net**: autoDestroy Socket (Robert Nagy) [#31806](https://github.com/nodejs/node/pull/31806)
* [[`3b10f7f933`](https://github.com/nodejs/node/commit/3b10f7f933)] - **(SEMVER-MAJOR)** **process**: change default --unhandled-rejections=throw (Dan Fabulich) [#33021](https://github.com/nodejs/node/pull/33021)
* [[`d8eef83757`](https://github.com/nodejs/node/commit/d8eef83757)] - **(SEMVER-MAJOR)** **process**: use v8 fast api calls for hrtime (Gus Caplan) [#33600](https://github.com/nodejs/node/pull/33600)
* [[`49745cdef0`](https://github.com/nodejs/node/commit/49745cdef0)] - **(SEMVER-MAJOR)** **process**: delay throwing an error using `throwDeprecation` (Ruben Bridgewater) [#32312](https://github.com/nodejs/node/pull/32312)
* [[`a416692e93`](https://github.com/nodejs/node/commit/a416692e93)] - **(SEMVER-MAJOR)** **repl**: remove deprecated repl.memory function (Ruben Bridgewater) [#33286](https://github.com/nodejs/node/pull/33286)
* [[`f217b2dfb0`](https://github.com/nodejs/node/commit/f217b2dfb0)] - **(SEMVER-MAJOR)** **repl**: remove deprecated repl.turnOffEditorMode() function (Ruben Bridgewater) [#33286](https://github.com/nodejs/node/pull/33286)
* [[`a1bcad8dc0`](https://github.com/nodejs/node/commit/a1bcad8dc0)] - **(SEMVER-MAJOR)** **repl**: remove deprecated repl.parseREPLKeyword() function (Ruben Bridgewater) [#33286](https://github.com/nodejs/node/pull/33286)
* [[`4ace010b53`](https://github.com/nodejs/node/commit/4ace010b53)] - **(SEMVER-MAJOR)** **repl**: remove deprecated bufferedCommand property (Ruben Bridgewater) [#33286](https://github.com/nodejs/node/pull/33286)
* [[`37524307fe`](https://github.com/nodejs/node/commit/37524307fe)] - **(SEMVER-MAJOR)** **repl**: remove deprecated .rli (Ruben Bridgewater) [#33286](https://github.com/nodejs/node/pull/33286)
* [[`21782277c2`](https://github.com/nodejs/node/commit/21782277c2)] - **(SEMVER-MAJOR)** **src**: use node:moduleName as builtin module filename (Michaël Zasso) [#35498](https://github.com/nodejs/node/pull/35498)
* [[`05771279af`](https://github.com/nodejs/node/commit/05771279af)] - **(SEMVER-MAJOR)** **src**: enable wasm trap handler on windows (Gus Caplan) [#35033](https://github.com/nodejs/node/pull/35033)
* [[`0fb91acedf`](https://github.com/nodejs/node/commit/0fb91acedf)] - **(SEMVER-MAJOR)** **src**: disallow JS execution inside FreeEnvironment (Anna Henningsen) [#33874](https://github.com/nodejs/node/pull/33874)
* [[`53fb2b6b41`](https://github.com/nodejs/node/commit/53fb2b6b41)] - **(SEMVER-MAJOR)** **src**: remove \_third\_party\_main support (Anna Henningsen) [#33971](https://github.com/nodejs/node/pull/33971)
* [[`a85ce885bd`](https://github.com/nodejs/node/commit/a85ce885bd)] - **(SEMVER-MAJOR)** **src**: remove deprecated node debug command (James M Snell) [#33648](https://github.com/nodejs/node/pull/33648)
* [[`ac3714637e`](https://github.com/nodejs/node/commit/ac3714637e)] - **(SEMVER-MAJOR)** **src**: remove unused CancelPendingDelayedTasks (Anna Henningsen) [#32859](https://github.com/nodejs/node/pull/32859)
* [[`60c4c2b6c5`](https://github.com/nodejs/node/commit/60c4c2b6c5)] - **(SEMVER-MAJOR)** **src**: runtime deprecate process.umask() (Colin Ihrig) [#32499](https://github.com/nodejs/node/pull/32499)
* [[`a65218f5e8`](https://github.com/nodejs/node/commit/a65218f5e8)] - **(SEMVER-MAJOR)** **stream**: try to wait for flush to complete before 'finish' (Robert Nagy) [#34314](https://github.com/nodejs/node/pull/34314)
* [[`4e3f6f355b`](https://github.com/nodejs/node/commit/4e3f6f355b)] - **(SEMVER-MAJOR)** **stream**: cleanup and fix Readable.wrap (Robert Nagy) [#34204](https://github.com/nodejs/node/pull/34204)
* [[`527e2147af`](https://github.com/nodejs/node/commit/527e2147af)] - **(SEMVER-MAJOR)** **stream**: add promises version to utility functions (rickyes) [#33991](https://github.com/nodejs/node/pull/33991)
* [[`c7e55c6b72`](https://github.com/nodejs/node/commit/c7e55c6b72)] - **(SEMVER-MAJOR)** **stream**: fix writable.end callback behavior (Robert Nagy) [#34101](https://github.com/nodejs/node/pull/34101)
* [[`fb8cc72e73`](https://github.com/nodejs/node/commit/fb8cc72e73)] - **(SEMVER-MAJOR)** **stream**: construct (Robert Nagy) [#29656](https://github.com/nodejs/node/pull/29656)
* [[`4bc7025309`](https://github.com/nodejs/node/commit/4bc7025309)] - **(SEMVER-MAJOR)** **stream**: write should throw on unknown encoding (Robert Nagy) [#33075](https://github.com/nodejs/node/pull/33075)
* [[`ea87809bb6`](https://github.com/nodejs/node/commit/ea87809bb6)] - **(SEMVER-MAJOR)** **stream**: fix \_final and 'prefinish' timing (Robert Nagy) [#32780](https://github.com/nodejs/node/pull/32780)
* [[`0bd5595509`](https://github.com/nodejs/node/commit/0bd5595509)] - **(SEMVER-MAJOR)** **stream**: simplify Transform stream implementation (Robert Nagy) [#32763](https://github.com/nodejs/node/pull/32763)
* [[`8f86986985`](https://github.com/nodejs/node/commit/8f86986985)] - **(SEMVER-MAJOR)** **stream**: use callback to properly propagate error (Robert Nagy) [#29179](https://github.com/nodejs/node/pull/29179)
* [[`c87641aa97`](https://github.com/nodejs/node/commit/c87641aa97)] - **(SEMVER-MAJOR)** **test**: fix test suite to work with npm 7 (Myles Borins) [#35474](https://github.com/nodejs/node/pull/35474)
* [[`eb9d7a437e`](https://github.com/nodejs/node/commit/eb9d7a437e)] - **(SEMVER-MAJOR)** **test**: update WPT harness and tests (Michaël Zasso) [#33770](https://github.com/nodejs/node/pull/33770)
* [[`a8904e8eee`](https://github.com/nodejs/node/commit/a8904e8eee)] - **(SEMVER-MAJOR)** **timers**: introduce timers/promises (James M Snell) [#33950](https://github.com/nodejs/node/pull/33950)
* [[`69ef4c2375`](https://github.com/nodejs/node/commit/69ef4c2375)] - **(SEMVER-MAJOR)** **url**: verify domain is not empty after "ToASCII" (Michaël Zasso) [#33770](https://github.com/nodejs/node/pull/33770)
* [[`4831278a16`](https://github.com/nodejs/node/commit/4831278a16)] - **(SEMVER-MAJOR)** **url**: remove U+0000 case in the fragment state (Michaël Zasso) [#33770](https://github.com/nodejs/node/pull/33770)
* [[`0d08d5ae7c`](https://github.com/nodejs/node/commit/0d08d5ae7c)] - **(SEMVER-MAJOR)** **url**: remove gopher from special schemes (Michaël Zasso) [#33325](https://github.com/nodejs/node/pull/33325)
* [[`9be51ee9a1`](https://github.com/nodejs/node/commit/9be51ee9a1)] - **(SEMVER-MAJOR)** **url**: forbid lt and gt in url host code point (Yash Ladha) [#33328](https://github.com/nodejs/node/pull/33328)
* [[`1211b9a72f`](https://github.com/nodejs/node/commit/1211b9a72f)] - **(SEMVER-MAJOR)** **util**: change default value of `maxStringLength` to 10000 (unknown) [#32744](https://github.com/nodejs/node/pull/32744)
* [[`abd8cdfc4e`](https://github.com/nodejs/node/commit/abd8cdfc4e)] - **(SEMVER-MAJOR)** **win, child_process**: sanitize env variables (Bartosz Sosnowski) [#35210](https://github.com/nodejs/node/pull/35210)
* [[`7603c7e50c`](https://github.com/nodejs/node/commit/7603c7e50c)] - **(SEMVER-MAJOR)** **worker**: set trackUnmanagedFds to true by default (Anna Henningsen) [#34394](https://github.com/nodejs/node/pull/34394)
* [[`5ef5116311`](https://github.com/nodejs/node/commit/5ef5116311)] - **(SEMVER-MAJOR)** **worker**: rename error code to be more accurate (Anna Henningsen) [#33872](https://github.com/nodejs/node/pull/33872)

### Semver-Minor Commits

* TBD

### Semver-Patch Commits

* TBD
