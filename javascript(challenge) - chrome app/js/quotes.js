const quotes = [
    {
        quote: "지식을 얻으려면 공부를 해야 하고, 지혜를 얻으려면 관찰을 해야 한다.",
        author: "Marilyn vos Savant"
    },
    {
        quote: "성공한 사람보다는 가치 있는 사람이 되려 하라.",
        author: "Albert Einstein"
    },
    {
        quote: "인간은 운명의 포로가 아니라 단지 자기 마음의 포로일 뿐이다.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "천명의 친구가 있어도 의지할 친구 하나 없고, 한 명의 적이 있어도 어딜가나 그를 만나게 될 것이다.",
        author: "Ali ibn-Abi-Talib"
    },
    {
        quote: "독서가 정신에 미치는 효과는 운동이 신체에 미치는 효과와 같다.",
        author: "Sir Richard Steele"
    },
    {
        quote: "과거를 애절하게 들여다보지 마라. 다시 오지 않는다. 현재를 현명하게 개선하라. 너의 것이니. 어렴풋한 미래를 나아가 맞으라. 두려움 없이.",
        author: "Henry Wadsworth Longfellow"
    },
    {
        quote: "함께 있을 때 웃음이 나오지 않는 사람과는 결코 진정한 사랑에 빠질 수 없다.",
        author: "Agnes Repplier"
    },
    {
        quote: "다른 누군가가 되어서 사랑받기보다는 있는 그대로의 나로서 미움받는 것이 낫다.",
        author: "Kurt Cobain"
    },
    {
        quote: "내 자신에 대한 자신감을 잃으면, 온 세상이 나의 적이 된다.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "인생에서 가장 의미없이 보낸 날은 웃지 않고 보낸 날이다.",
        author: "E. E. Cummings"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `- ${todaysQuote.quote}`;
author.innerText = `- ${todaysQuote.author}`;