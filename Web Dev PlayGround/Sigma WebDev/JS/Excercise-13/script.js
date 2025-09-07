function createCard(title, channelName, views, months, dueration, thumbnail) {


    let viewNumber = views;
    if (viewNumber >= 1000000) {
        viewNumber = (viewNumber / 1000000) + 'M';
    }
    else if (viewNumber >= 1000) {
        viewNumber = (viewNumber / 1000) + 'K';
    }
    else {
        viewNumber = viewNumber;
    }

    let card = `<div class="card">
            <div class="imaege-card">
                <img width="290" src="${thumbnail}" alt="thumbnail">
                <div class="duration">${dueration}</div>
            </div>
            <div class="text-part">
                <h3>${title}</h3>
                <p>${channelName} . ${viewNumber} Views . ${months} months ago</p>
            </div>
        </div>
    </div>`;
    document.querySelector('.container').innerHTML = document.querySelector('.container').innerHTML + card;

}

createCard(
    'Introduction to Backend | Sigma Web Dev video #2',
    'CodeWithHarry',
    560000,
    7,
    '31:22',
    'https://i.ytimg.com/vi/NoWRBo3Uf8E/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLA2mDiQbqxLuGC5OvTUpJDv8seDmg'
);
createCard(
    'Events, Event Bubbling, setInterval & setTimeout | Sigma Web Development Course - Tutorial #74',
    'CodeWithHarry',
    560000,
    7,
    '31:22',
    'https://i.ytimg.com/vi/NoWRBo3Uf8E/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLA2mDiQbqxLuGC5OvTUpJDv8seDmg'
);
createCard(
    'JavaScript Callbacks & Promises | Sigma Web Development Course - Tutorial #75',
    'CodeWithHarry',
    560000,
    7,
    '31:22',
    'https://i.ytimg.com/vi/NoWRBo3Uf8E/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLA2mDiQbqxLuGC5OvTUpJDv8seDmg'
);

