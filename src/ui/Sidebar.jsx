export default function Sidebar() {
    return (
        <sidebar
            id="sidebar"
            class="sidebar sidebar-animated"
            style="left: -350px"
        >
            <nav id="sidebar-content" class="sidebar-content">
                <ol class="chapter">
                    <li class="chapter-item expanded affix ">
                        <a href="title-page.html" tabindex="0">
                            The Rust Programming Language
                        </a>
                    </li>
                    <li class="chapter-item expanded affix ">
                        <a href="foreword.html" tabindex="0">
                            Foreword
                        </a>
                    </li>
                    <li class="chapter-item expanded affix ">
                        <a href="ch00-00-introduction.html" tabindex="0">
                            Introduction
                        </a>
                    </li>
                    <li class="chapter-item expanded ">
                        <a href="ch01-00-getting-started.html" tabindex="0">
                            <strong aria-hidden="true">1.</strong> Getting
                            Started
                        </a>
                    </li>
                    <li>
                        <ol class="section">
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch01-01-installation.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">1.1.</strong>{' '}
                                    Installation
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a href="ch01-02-hello-world.html" tabindex="0">
                                    <strong aria-hidden="true">1.2.</strong>{' '}
                                    Hello, World!
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a href="ch01-03-hello-cargo.html" tabindex="0">
                                    <strong aria-hidden="true">1.3.</strong>{' '}
                                    Hello, Cargo!
                                </a>
                            </li>
                        </ol>
                    </li>
                    <li class="chapter-item expanded ">
                        <a
                            href="ch02-00-guessing-game-tutorial.html"
                            tabindex="0"
                        >
                            <strong aria-hidden="true">2.</strong> Programming a
                            Guessing Game
                        </a>
                    </li>
                    <li class="chapter-item expanded ">
                        <a
                            href="ch03-00-common-programming-concepts.html"
                            tabindex="0"
                        >
                            <strong aria-hidden="true">3.</strong> Common
                            Programming Concepts
                        </a>
                    </li>
                    <li>
                        <ol class="section">
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch03-01-variables-and-mutability.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">3.1.</strong>{' '}
                                    Variables and Mutability
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a href="ch03-02-data-types.html" tabindex="0">
                                    <strong aria-hidden="true">3.2.</strong>{' '}
                                    Data Types
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch03-03-how-functions-work.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">3.3.</strong>{' '}
                                    Functions
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a href="ch03-04-comments.html" tabindex="0">
                                    <strong aria-hidden="true">3.4.</strong>{' '}
                                    Comments
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch03-05-control-flow.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">3.5.</strong>{' '}
                                    Control Flow
                                </a>
                            </li>
                        </ol>
                    </li>
                    <li class="chapter-item expanded ">
                        <a
                            href="ch04-00-understanding-ownership.html"
                            tabindex="0"
                        >
                            <strong aria-hidden="true">4.</strong> Understanding
                            Ownership
                        </a>
                    </li>
                    <li>
                        <ol class="section">
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch04-01-what-is-ownership.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">4.1.</strong>{' '}
                                    What is Ownership?
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch04-02-references-and-borrowing.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">4.2.</strong>{' '}
                                    References and Borrowing
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a href="ch04-03-slices.html" tabindex="0">
                                    <strong aria-hidden="true">4.3.</strong> The
                                    Slice Type
                                </a>
                            </li>
                        </ol>
                    </li>
                    <li class="chapter-item expanded ">
                        <a href="ch05-00-structs.html" tabindex="0">
                            <strong aria-hidden="true">5.</strong> Using Structs
                            to Structure Related Data
                        </a>
                    </li>
                    <li>
                        <ol class="section">
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch05-01-defining-structs.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">5.1.</strong>{' '}
                                    Defining and Instantiating Structs
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch05-02-example-structs.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">5.2.</strong> An
                                    Example Program Using Structs
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch05-03-method-syntax.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">5.3.</strong>{' '}
                                    Method Syntax
                                </a>
                            </li>
                        </ol>
                    </li>
                    <li class="chapter-item expanded ">
                        <a href="ch06-00-enums.html" tabindex="0">
                            <strong aria-hidden="true">6.</strong> Enums and
                            Pattern Matching
                        </a>
                    </li>
                    <li>
                        <ol class="section">
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch06-01-defining-an-enum.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">6.1.</strong>{' '}
                                    Defining an Enum
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a href="ch06-02-match.html" tabindex="0">
                                    <strong aria-hidden="true">6.2.</strong> The
                                    match Control Flow Construct
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a href="ch06-03-if-let.html" tabindex="0">
                                    <strong aria-hidden="true">6.3.</strong>{' '}
                                    Concise Control Flow with if let
                                </a>
                            </li>
                        </ol>
                    </li>
                    <li class="chapter-item expanded ">
                        <a
                            href="ch07-00-managing-growing-projects-with-packages-crates-and-modules.html"
                            tabindex="0"
                        >
                            <strong aria-hidden="true">7.</strong> Managing
                            Growing Projects with Packages, Crates, and Modules
                        </a>
                    </li>
                    <li>
                        <ol class="section">
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch07-01-packages-and-crates.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">7.1.</strong>{' '}
                                    Packages and Crates
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch07-02-defining-modules-to-control-scope-and-privacy.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">7.2.</strong>{' '}
                                    Defining Modules to Control Scope and
                                    Privacy
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch07-03-paths-for-referring-to-an-item-in-the-module-tree.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">7.3.</strong>{' '}
                                    Paths for Referring to an Item in the Module
                                    Tree
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch07-04-bringing-paths-into-scope-with-the-use-keyword.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">7.4.</strong>{' '}
                                    Bringing Paths Into Scope with the use
                                    Keyword
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch07-05-separating-modules-into-different-files.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">7.5.</strong>{' '}
                                    Separating Modules into Different Files
                                </a>
                            </li>
                        </ol>
                    </li>
                    <li class="chapter-item expanded ">
                        <a href="ch08-00-common-collections.html" tabindex="0">
                            <strong aria-hidden="true">8.</strong> Common
                            Collections
                        </a>
                    </li>
                    <li>
                        <ol class="section">
                            <li class="chapter-item expanded ">
                                <a href="ch08-01-vectors.html" tabindex="0">
                                    <strong aria-hidden="true">8.1.</strong>{' '}
                                    Storing Lists of Values with Vectors
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a href="ch08-02-strings.html" tabindex="0">
                                    <strong aria-hidden="true">8.2.</strong>{' '}
                                    Storing UTF-8 Encoded Text with Strings
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a href="ch08-03-hash-maps.html" tabindex="0">
                                    <strong aria-hidden="true">8.3.</strong>{' '}
                                    Storing Keys with Associated Values in Hash
                                    Maps
                                </a>
                            </li>
                        </ol>
                    </li>
                    <li class="chapter-item expanded ">
                        <a href="ch09-00-error-handling.html" tabindex="0">
                            <strong aria-hidden="true">9.</strong> Error
                            Handling
                        </a>
                    </li>
                    <li>
                        <ol class="section">
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch09-01-unrecoverable-errors-with-panic.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">9.1.</strong>{' '}
                                    Unrecoverable Errors with panic!
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch09-02-recoverable-errors-with-result.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">9.2.</strong>{' '}
                                    Recoverable Errors with Result
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch09-03-to-panic-or-not-to-panic.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">9.3.</strong> To
                                    panic! or Not to panic!
                                </a>
                            </li>
                        </ol>
                    </li>
                    <li class="chapter-item expanded ">
                        <a href="ch10-00-generics.html" tabindex="0">
                            <strong aria-hidden="true">10.</strong> Generic
                            Types, Traits, and Lifetimes
                        </a>
                    </li>
                    <li>
                        <ol class="section">
                            <li class="chapter-item expanded ">
                                <a href="ch10-01-syntax.html" tabindex="0">
                                    <strong aria-hidden="true">10.1.</strong>{' '}
                                    Generic Data Types
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a href="ch10-02-traits.html" tabindex="0">
                                    <strong aria-hidden="true">10.2.</strong>{' '}
                                    Traits: Defining Shared Behavior
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch10-03-lifetime-syntax.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">10.3.</strong>{' '}
                                    Validating References with Lifetimes
                                </a>
                            </li>
                        </ol>
                    </li>
                    <li class="chapter-item expanded ">
                        <a href="ch11-00-testing.html" tabindex="0">
                            <strong aria-hidden="true">11.</strong> Writing
                            Automated Tests
                        </a>
                    </li>
                    <li>
                        <ol class="section">
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch11-01-writing-tests.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">11.1.</strong>{' '}
                                    How to Write Tests
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch11-02-running-tests.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">11.2.</strong>{' '}
                                    Controlling How Tests Are Run
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch11-03-test-organization.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">11.3.</strong>{' '}
                                    Test Organization
                                </a>
                            </li>
                        </ol>
                    </li>
                    <li class="chapter-item expanded ">
                        <a href="ch12-00-an-io-project.html" tabindex="0">
                            <strong aria-hidden="true">12.</strong> An I/O
                            Project: Building a Command Line Program
                        </a>
                    </li>
                    <li>
                        <ol class="section">
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch12-01-accepting-command-line-arguments.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">12.1.</strong>{' '}
                                    Accepting Command Line Arguments
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch12-02-reading-a-file.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">12.2.</strong>{' '}
                                    Reading a File
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch12-03-improving-error-handling-and-modularity.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">12.3.</strong>{' '}
                                    Refactoring to Improve Modularity and Error
                                    Handling
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch12-04-testing-the-librarys-functionality.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">12.4.</strong>{' '}
                                    Developing the Library’s Functionality with
                                    Test Driven Development
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch12-05-working-with-environment-variables.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">12.5.</strong>{' '}
                                    Working with Environment Variables
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch12-06-writing-to-stderr-instead-of-stdout.html"
                                    class="active"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">12.6.</strong>{' '}
                                    Writing Error Messages to Standard Error
                                    Instead of Standard Output
                                </a>
                            </li>
                        </ol>
                    </li>
                    <li class="chapter-item expanded ">
                        <a href="ch13-00-functional-features.html" tabindex="0">
                            <strong aria-hidden="true">13.</strong> Functional
                            Language Features: Iterators and Closures
                        </a>
                    </li>
                    <li>
                        <ol class="section">
                            <li class="chapter-item expanded ">
                                <a href="ch13-01-closures.html" tabindex="0">
                                    <strong aria-hidden="true">13.1.</strong>{' '}
                                    Closures: Anonymous Functions that Capture
                                    Their Environment
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a href="ch13-02-iterators.html" tabindex="0">
                                    <strong aria-hidden="true">13.2.</strong>{' '}
                                    Processing a Series of Items with Iterators
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch13-03-improving-our-io-project.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">13.3.</strong>{' '}
                                    Improving Our I/O Project
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a href="ch13-04-performance.html" tabindex="0">
                                    <strong aria-hidden="true">13.4.</strong>{' '}
                                    Comparing Performance: Loops vs. Iterators
                                </a>
                            </li>
                        </ol>
                    </li>
                    <li class="chapter-item expanded ">
                        <a href="ch14-00-more-about-cargo.html" tabindex="0">
                            <strong aria-hidden="true">14.</strong> More about
                            Cargo and Crates.io
                        </a>
                    </li>
                    <li>
                        <ol class="section">
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch14-01-release-profiles.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">14.1.</strong>{' '}
                                    Customizing Builds with Release Profiles
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch14-02-publishing-to-crates-io.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">14.2.</strong>{' '}
                                    Publishing a Crate to Crates.io
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch14-03-cargo-workspaces.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">14.3.</strong>{' '}
                                    Cargo Workspaces
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch14-04-installing-binaries.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">14.4.</strong>{' '}
                                    Installing Binaries from Crates.io with
                                    cargo install
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch14-05-extending-cargo.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">14.5.</strong>{' '}
                                    Extending Cargo with Custom Commands
                                </a>
                            </li>
                        </ol>
                    </li>
                    <li class="chapter-item expanded ">
                        <a href="ch15-00-smart-pointers.html" tabindex="0">
                            <strong aria-hidden="true">15.</strong> Smart
                            Pointers
                        </a>
                    </li>
                    <li>
                        <ol class="section">
                            <li class="chapter-item expanded ">
                                <a href="ch15-01-box.html" tabindex="0">
                                    <strong aria-hidden="true">15.1.</strong>{' '}
                                    Using Box&lt;T&gt; to Point to Data on the
                                    Heap
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a href="ch15-02-deref.html" tabindex="0">
                                    <strong aria-hidden="true">15.2.</strong>{' '}
                                    Treating Smart Pointers Like Regular
                                    References with the Deref Trait
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a href="ch15-03-drop.html" tabindex="0">
                                    <strong aria-hidden="true">15.3.</strong>{' '}
                                    Running Code on Cleanup with the Drop Trait
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a href="ch15-04-rc.html" tabindex="0">
                                    <strong aria-hidden="true">15.4.</strong>{' '}
                                    Rc&lt;T&gt;, the Reference Counted Smart
                                    Pointer
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch15-05-interior-mutability.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">15.5.</strong>{' '}
                                    RefCell&lt;T&gt; and the Interior Mutability
                                    Pattern
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch15-06-reference-cycles.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">15.6.</strong>{' '}
                                    Reference Cycles Can Leak Memory
                                </a>
                            </li>
                        </ol>
                    </li>
                    <li class="chapter-item expanded ">
                        <a href="ch16-00-concurrency.html" tabindex="0">
                            <strong aria-hidden="true">16.</strong> Fearless
                            Concurrency
                        </a>
                    </li>
                    <li>
                        <ol class="section">
                            <li class="chapter-item expanded ">
                                <a href="ch16-01-threads.html" tabindex="0">
                                    <strong aria-hidden="true">16.1.</strong>{' '}
                                    Using Threads to Run Code Simultaneously
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch16-02-message-passing.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">16.2.</strong>{' '}
                                    Using Message Passing to Transfer Data
                                    Between Threads
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch16-03-shared-state.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">16.3.</strong>{' '}
                                    Shared-State Concurrency
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch16-04-extensible-concurrency-sync-and-send.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">16.4.</strong>{' '}
                                    Extensible Concurrency with the Sync and
                                    Send Traits
                                </a>
                            </li>
                        </ol>
                    </li>
                    <li class="chapter-item expanded ">
                        <a href="ch17-00-oop.html" tabindex="0">
                            <strong aria-hidden="true">17.</strong> Object
                            Oriented Programming Features of Rust
                        </a>
                    </li>
                    <li>
                        <ol class="section">
                            <li class="chapter-item expanded ">
                                <a href="ch17-01-what-is-oo.html" tabindex="0">
                                    <strong aria-hidden="true">17.1.</strong>{' '}
                                    Characteristics of Object-Oriented Languages
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch17-02-trait-objects.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">17.2.</strong>{' '}
                                    Using Trait Objects That Allow for Values of
                                    Different Types
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch17-03-oo-design-patterns.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">17.3.</strong>{' '}
                                    Implementing an Object-Oriented Design
                                    Pattern
                                </a>
                            </li>
                        </ol>
                    </li>
                    <li class="chapter-item expanded ">
                        <a href="ch18-00-patterns.html" tabindex="0">
                            <strong aria-hidden="true">18.</strong> Patterns and
                            Matching
                        </a>
                    </li>
                    <li>
                        <ol class="section">
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch18-01-all-the-places-for-patterns.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">18.1.</strong>{' '}
                                    All the Places Patterns Can Be Used
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch18-02-refutability.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">18.2.</strong>{' '}
                                    Refutability: Whether a Pattern Might Fail
                                    to Match
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch18-03-pattern-syntax.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">18.3.</strong>{' '}
                                    Pattern Syntax
                                </a>
                            </li>
                        </ol>
                    </li>
                    <li class="chapter-item expanded ">
                        <a href="ch19-00-advanced-features.html" tabindex="0">
                            <strong aria-hidden="true">19.</strong> Advanced
                            Features
                        </a>
                    </li>
                    <li>
                        <ol class="section">
                            <li class="chapter-item expanded ">
                                <a href="ch19-01-unsafe-rust.html" tabindex="0">
                                    <strong aria-hidden="true">19.1.</strong>{' '}
                                    Unsafe Rust
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch19-03-advanced-traits.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">19.2.</strong>{' '}
                                    Advanced Traits
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch19-04-advanced-types.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">19.3.</strong>{' '}
                                    Advanced Types
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch19-05-advanced-functions-and-closures.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">19.4.</strong>{' '}
                                    Advanced Functions and Closures
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a href="ch19-06-macros.html" tabindex="0">
                                    <strong aria-hidden="true">19.5.</strong>{' '}
                                    Macros
                                </a>
                            </li>
                        </ol>
                    </li>
                    <li class="chapter-item expanded ">
                        <a
                            href="ch20-00-final-project-a-web-server.html"
                            tabindex="0"
                        >
                            <strong aria-hidden="true">20.</strong> Final
                            Project: Building a Multithreaded Web Server
                        </a>
                    </li>
                    <li>
                        <ol class="section">
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch20-01-single-threaded.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">20.1.</strong>{' '}
                                    Building a Single-Threaded Web Server
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch20-02-multithreaded.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">20.2.</strong>{' '}
                                    Turning Our Single-Threaded Server into a
                                    Multithreaded Server
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="ch20-03-graceful-shutdown-and-cleanup.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">20.3.</strong>{' '}
                                    Graceful Shutdown and Cleanup
                                </a>
                            </li>
                        </ol>
                    </li>
                    <li class="chapter-item expanded ">
                        <a href="appendix-00.html" tabindex="0">
                            <strong aria-hidden="true">21.</strong> Appendix
                        </a>
                    </li>
                    <li>
                        <ol class="section">
                            <li class="chapter-item expanded ">
                                <a
                                    href="appendix-01-keywords.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">21.1.</strong> A
                                    - Keywords
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="appendix-02-operators.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">21.2.</strong> B
                                    - Operators and Symbols
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="appendix-03-derivable-traits.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">21.3.</strong> C
                                    - Derivable Traits
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="appendix-04-useful-development-tools.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">21.4.</strong> D
                                    - Useful Development Tools
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="appendix-05-editions.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">21.5.</strong> E
                                    - Editions
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="appendix-06-translation.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">21.6.</strong> F
                                    - Translations of the Book
                                </a>
                            </li>
                            <li class="chapter-item expanded ">
                                <a
                                    href="appendix-07-nightly-rust.html"
                                    tabindex="0"
                                >
                                    <strong aria-hidden="true">21.7.</strong> G
                                    - How Rust is Made and “Nightly Rust”
                                </a>
                            </li>
                        </ol>
                    </li>
                </ol>
            </nav>
        </sidebar>
    );
}