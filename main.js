function up()
{
    document.querySelector('div').classList.remove('smallSize')
    document.querySelector('div').classList.add('largeSize');
}
document.querySelector(".large-size").onclick=up;

function less()
{
    document.querySelector('div').classList.remove('largeSize')
    document.querySelector('div').classList.add('smallSize');
}
document.querySelector(".small-size").onclick=less;
