// import { Cancel } from 'jsx-icons/heroicons/24/solid';
import { DocumentDuplicate } from './icons';
import ClipboardJS from 'clipboard';

const clipboard = new ClipboardJS('.action-copy', {
    target: function (trigger) {
        return trigger.parentNode.nextElementSibling;
    },
});

clipboard.on('success', function (e) {
    e.clearSelection();
});

clipboard.on('error', function (e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});

export default function Snippet({
    code,
    type = 'js',
    disableButtons,
    children,
}) {
    if (code) {
    }

    return (
        <pre class="snippet">
            
            <div class="buttons">
                <DocumentDuplicate classes="btn action-copy outline" />
            </div>
            <code class={['hljs', 'snippet-content', type].join(' ')}>
                {children}
            </code>
        </pre>
    );
}
