const data = [
    {
        author: 'username',
        content: 'test message',
        replies: [
            {
                author: 'kohlifan',
                content: 'hi',
                replies: [
                    {
                        author: 'leetcode_a',
                        content: 'comment your code',
                    }
                ]
            },
            {
                author: 'csharpisbetterthanjava',
                content: 'documentation?'
            }
        ]
    },
    {
        author: 'user2',
        content: 'good evening'
    }
];

const processReply = (data, container, level = 0) => {
    data.forEach(item => {
        const messageDiv = document.createElement('div');
        messageDiv.setAttribute('class', 'message');
        messageDiv.style.marginLeft = `${level * 20}px`;

        const authorDiv = document.createElement('strong');
        const contentDiv = document.createElement('div');

        authorDiv.textContent = `Author: ${item.author}`;
        contentDiv.textContent = `Content: ${item.content}`;

        messageDiv.appendChild(authorDiv);
        messageDiv.appendChild(contentDiv);
        container.appendChild(messageDiv);

        if (item.replies && item.replies.length > 0) {
            const replyDiv = document.createElement('div');
            replyDiv.setAttribute('class', 'replies');
            replyDiv.style.display = 'none'; 
            processReply(item.replies, replyDiv, level + 1); 
            messageDiv.appendChild(replyDiv);

            const loadMoreButton = document.createElement('button');
            loadMoreButton.textContent = 'Load more';
            loadMoreButton.setAttribute('class', 'load-more');
            loadMoreButton.style.marginLeft = `${(level + 1) * 20}px`;
            container.appendChild(loadMoreButton);

            let repliesVisible = false;

            loadMoreButton.addEventListener('click', () => {
                repliesVisible = !repliesVisible;
                replyDiv.style.display = repliesVisible ? 'block' : 'none';
                loadMoreButton.textContent = repliesVisible ? 'Hide' : 'Load more';
            });
        }
    });
};

const replyThread = document.getElementById('root');

processReply(data, replyThread);
