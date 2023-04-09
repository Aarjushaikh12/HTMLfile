const quoteContainer = document.querySelector(".quote");
const authorContainer = document.querySelector(".author");
const refresh = document.querySelector(".refresh");
const copy = document.querySelector(".copy");
const container = document.querySelector(".container");
const Loader = document.querySelector(".loader");

const LoaderShow = () =>
{
    container.classList.add("hidden");
    Loader.classList.remove("hidden");
};

const Loaderhide = () =>
{
    if(!Loader.classList.contains("hidden"))
    {
        container.classList.remove("hidden");
        Loader.classList.add("hidden");
    }   
}; 

const quote = async () =>
{
    LoaderShow();
    const URL = await fetch("https://api.quotable.io/random");
    const response = await URL.json();
    return response;

};

const updateUI= (response) =>
{
    const authorData= `--${response.author}`;
    const quoteData= `${response.content}`;
    quoteContainer.textContent = quoteData;
    authorContainer.textContent = authorData;
    if(quoteData.length>80)
    {
        quoteContainer.setAttribute("style","font-size: 22px")
    };

    if(quoteData.length)
    {
        Loaderhide();
    }

    copy.addEventListener("click", () => 
    {
        const copyData = `${quoteData} - ${authorData} `;
        navigator.clipboard.writeText(copyData);
        alert("Quote copied!");
    });
};



refresh.addEventListener("click",e=>
{
   if(e.target)
   {
    quote().then(response => 
        {updateUI(response);
    }).catch(err =>
        {console.log(err);
    });
   }
});

quote().then(response =>
    {
        updateUI(response);
    }).catch(err => {
        console.log(err);
    });
