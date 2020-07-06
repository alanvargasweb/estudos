String.prototype.replaceAll = function(busca, troca) {
    console.log(this.valueOf());
    var str = this.valueOf();

    return str.split(busca).join(troca);

}