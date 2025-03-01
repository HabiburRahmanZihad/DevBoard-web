const BtnTwo = document.getElementById('btn-2');

BtnTwo.addEventListener('click', function (event) {
    event.preventDefault();


    const minusTitle = document.getElementById('minus-title')
    const plusTitle = document.getElementById('plus-title')

    const decTitle = convertToNumber('minus-title');
    const incTitle = convertToNumber('plus-title');

    const mainNum = decTitle - 1;
    minusTitle.innerText = mainNum;

    const mainNum2 = incTitle + 1;
    plusTitle.innerText = mainNum2;

    let currentTime = getFormattedTime();
    let title = document.getElementById('title-history-two').innerText;

    //todo History Card design
    const historyCard = document.createElement('div');
    historyCard.className = 'mt-4 p-[10px] bg-[#F4F7FF] rounded-xl';
    historyCard.innerHTML = `
        <p class="bg-[F4F7FF] text-base font-normal ">You have Complete The Task ${title} at ${currentTime}
        </p>
    `;
    document.getElementById('history-card').appendChild(historyCard);
});