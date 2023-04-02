import { onMount } from 'solid-js';
import Bars3 from './icons/Bars3';
import ChevronUp from './icons/ChevronUp';
import Moon from './icons/Moon';
import Sun from './icons/Sun';

import hljs from 'highlight.js';

export default function Page({ children }) {
    onMount(() => {
        hljs.highlightAll();

        // ScrollToTop
        (function () {
            const scrollToTopBtn = document.querySelector('#footer-bar');
            const contentWrapper = document.getElementById('content-wrapper');

            contentWrapper.addEventListener('scroll', function (e) {
                scrollToTopBtn.style.bottom =
                    contentWrapper.scrollTop > window.innerHeight / 2
                        ? '0'
                        : '-100px';
            });

            scrollToTopBtn.addEventListener('click', function (e) {
                contentWrapper.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            });
        })();

        // Theme switcher:
        (function () {
            const themeAttr = 'data-theme';
            var colorThemeSwitcherElement = document.querySelector(
                '.color-theme-switcher'
            );

            let preferredColorScheme = window.matchMedia(
                '(prefers-color-scheme: dark)'
            ).matches
                ? 'dark'
                : 'light';

            window
                .matchMedia('(prefers-color-scheme: dark)')
                .addEventListener('change', function (event) {
                    if (!getTheme()) {
                        preferredColorScheme = event.matches ? 'dark' : 'light';
                        document
                            .querySelector('html')
                            .setAttribute(themeAttr, preferredColorScheme);
                    }
                });

            colorThemeSwitcherElement.addEventListener('click', function () {
                const currentTheme = getTheme() ?? preferredColorScheme;
                if (currentTheme === 'light') {
                    setTheme('dark');
                } else if (currentTheme === 'dark') {
                    setTheme('light');
                }
            });

            function setTheme(theme) {
                document.querySelector('html').setAttribute(themeAttr, theme);
                window.localStorage.setItem('theme', theme);
            }

            function getTheme() {
                return window.localStorage.getItem('theme');
            }
        })();

        // Theme options load
        (function () {
            const themeAttr = 'data-theme';
            const isInDarkMode =
                window.matchMedia &&
                window.matchMedia('(prefers-color-scheme: dark)').matches;

            if (getTheme() == null) {
                setTheme(isInDarkMode ? 'dark' : 'light');
            } else {
                setTheme(getTheme());
            }

            function setTheme(theme) {
                document.querySelector('html').setAttribute(themeAttr, theme);
            }

            function getTheme() {
                return window.localStorage.getItem('theme');
            }
        })();

        (() => {
            const sidebarToggleBtn = document.getElementById('sidebar-toggle');
            const sidebar = document.getElementById('sidebar');
            sidebarToggleBtn.addEventListener('click', () => {
                if (sidebar.classList.contains('sidebar-opened')) {
                    sidebar.classList.remove('sidebar-opened');
                    sidebar.style.left = '-350px';
                } else {
                    sidebar.classList.add('sidebar-opened');
                    sidebar.style.left = '0px';
                }
            });
        })();

        (() => {
            const sidebar = document.getElementById('sidebar');
            const contentWrapper = document.getElementById('content-wrapper');

            const sidebarGestureHandler = new Hammer(sidebar);
            const pageGestureHandler = new Hammer(contentWrapper);

            pageGestureHandler.on('panend', (ev) => {
                if (
                    sidebar.classList.contains('sidebar-opened') ||
                    ev.center.x > 250
                )
                    return;
                if (ev.velocity > 0.1) {
                    sidebar.style.left = 0;
                    sidebar.classList.add('sidebar-opened');
                }
            });

            let panStartX;
            sidebarGestureHandler.on('panleft panright', function (ev) {
                if (sidebar.classList.contains('sidebar-opened')) {
                    const sidebarOffsetLeft = sidebar.offsetLeft;
                    let shift = 0;
                    let panDelta = null;

                    if (ev.deltaX <= 0) {
                        panDelta = panStartX + ev.deltaX;
                    } else {
                        panDelta = ev.deltaX - panStartX;
                    }

                    shift = panDelta;

                    panStartX = Math.abs(ev.deltaX);

                    if (shift <= -1 && sidebarOffsetLeft <= -300) {
                        return;
                    }
                    if (shift >= 1 && sidebarOffsetLeft >= 10) {
                        return;
                    }

                    sidebar.style.left = sidebarOffsetLeft + shift + 'px';
                }
            });

            sidebarGestureHandler.on('panstart', (ev) => {
                sidebar.classList.remove('sidebar-animated');
                panStartX = 0;
            });

            sidebarGestureHandler.on('panend', (ev) => {
                sidebar.classList.add('sidebar-animated');

                if (ev.velocity < -0.1 || sidebar.offsetLeft < -190) {
                    sidebar.style.left = '-350px';
                    sidebar.classList.remove('sidebar-opened');
                    return;
                } else {
                    sidebar.style.left = 0;
                    return;
                }
            });
        })();
    });

    return (
        <page>
            <div id="menu-bar" class="menu-bar" style="top: 0px;">
                <div class="left-buttons">
                    <div class="btn color-theme-switcher">
                        <Sun classes=" " />
                        <Moon classes=" " />
                    </div>
                </div>

                <div class="middle-buttons">
                    <h1 class="menu-title">mxcore</h1>
                </div>
                <div class="right-buttons">
                    <Bars3 id="sidebar-toggle" classes="btn solid outline" />
                </div>
            </div>
            <div id="content-wrapper">
                <content>{children}</content>
            </div>

            <div id="footer-bar" class="menu-bar" style="top: 0px;">
                <div class="left-buttons"></div>

                <div class="middle-buttons">
                    <ChevronUp id="scroll-to-top" classes="btn solid outline" />
                </div>

                <div class="right-buttons"></div>
            </div>
        </page>
    );
}
