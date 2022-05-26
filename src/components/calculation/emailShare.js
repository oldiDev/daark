const EmailShare = require('@cidekar/browser-email-share')

// New-up an instance
const share = new EmailShare({
    text: 'Email',
    slot: `<a
                    class="btn btn-blue"
                    href="mailto:?subject={{email.subject}}&body={{email.body}}"
                    target="{{anchor.target}}"
                    rel="{{anchor.rel}}">
                    {{anchor.text}}
                </a>`
})

// Render the DOM
share.render(
    {
        body: 'Thank you for sending emails with your customized component.',
        subject: 'An email, created with a custom slot.'
    },
    document.getElementById('render')
)