import './css/app.scss';
import { Route, Routes } from '@solidjs/router';
import Layout from './ui/Layout';
import Snippet from './ui/Snippet';

export default function App() {
    return (
        <Routes>
            <Route path="/doc" component={Layout}>
                <Route path="/" component={Doc} />
            </Route>
        </Routes>
    );
}

function Doc() {
    return (
        <>
            <h2>Installation</h2>
            <p>
                The first step is to install Rust. We’ll download Rust through{' '}
                <code class="hljs">rustup</code>, a command line tool for
                managing Rust versions and associated tools. You’ll need an
                internet connection for the download.
            </p>
            <blockquote>
                <p>
                    Note: If you prefer not to use{' '}
                    <code class="hljs">rustup</code> for some reason, please see
                    the{' '}
                    <a href="https://forge.rust-lang.org/infra/other-installation-methods.html">
                        Other Rust Installation Methods page
                    </a>{' '}
                    for more options.
                </p>
            </blockquote>
            <h3 id="creating-a-project-directory">
                <a class="header" href="#creating-a-project-directory">
                    Creating a Project Directory
                </a>
            </h3>
            <p>
                You’ll start by making a directory to store your Rust code. It
                doesn’t matter to Rust where your code lives, but for the
                exercises and projects in this book, we suggest making a{' '}
                <em>projects</em> directory in your home directory and keeping
                all your projects there.
            </p>
            <p>
                Open a terminal and enter the following commands to make a{' '}
                <em>projects</em> directory and a directory for the “Hello,
                world!” project within the <em>projects</em> directory.
            </p>
            <p>For Linux, macOS, and PowerShell on Windows, enter this:</p>
            <pre>
                <div class="buttons">
                    <button
                        class="fa fa-copy clip-button"
                        title="Copy to clipboard"
                        aria-label="Copy to clipboard"
                    >
                        <i class="tooltiptext"></i>
                    </button>
                </div>
                <code class="language-console hljs shell">
                    <span class="hljs-meta">$</span>
                    <span class="bash"> mkdir ~/projects</span>
                    <span class="hljs-meta">$</span>
                    <span class="bash">
                        {' '}
                        <span class="hljs-built_in">cd</span> ~/projects
                    </span>
                    <span class="hljs-meta">$</span>
                    <span class="bash"> mkdir hello_world</span>
                    <span class="hljs-meta">$</span>
                    <span class="bash">
                        {' '}
                        <span class="hljs-built_in">cd</span> hello_world
                    </span>
                </code>
            </pre>

            <h3 id="writing-and-running-a-rust-program">
                <a class="header" href="#writing-and-running-a-rust-program">
                    Writing and Running a Rust Program
                </a>
            </h3>
            <p>
                Next, make a new source file and call it <em>main.rs</em>. Rust
                files always end with the <em>.rs</em> extension. If you’re
                using more than one word in your filename, the convention is to
                use an underscore to separate them. For example, use
                <em>hello_world.rs</em> rather than <em>helloworld.rs</em>.
            </p>
            <p>
                Now open the <em>main.rs</em> file you just created and enter
                the code in Listing 1-1.
            </p>
            <p>
                <span class="filename">Filename: main.rs</span>
            </p>
            <Snippet type="rust">{`fn main() {
    println!("Hello, world!");
}
`}</Snippet>
            <p>
                Regardless of your operating system, the string{' '}
                <code class="hljs">Hello, world!</code> should print to the
                terminal. If you don’t see this output, refer back to the
                <a href="ch01-01-installation.html#troubleshooting">
                    “Troubleshooting”
                </a>
                {`<!-- ignore --> part of the Installation
section for ways to get help.`}
            </p>
        </>
    );
}
