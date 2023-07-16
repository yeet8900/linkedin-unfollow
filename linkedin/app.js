for (a = 2; a < unfollowElements.length; a++) {
    setTimeout(() => {
        unfollowElements[a].click();
    }, 0);
    setTimeout(() => {
        let confirmUnfollow = document.getElementsByClassName(
            "artdeco-modal__confirm-dialog-btn artdeco-button artdeco-button--2 artdeco-button--primary ember-view",
        );
        confirmUnfollow[0].click();
    }, 0);
    console.log(a);
}



for (var a = 2; a < unfollowElements.length; a++) {
    setTimeout((a) => { unfollowElements[a].click(); }, 0, a);
    setTimeout(() => {
        let confirmUnfollow = document.getElementsByClassName('artdeco-modal__confirm-dialog-btn artdeco-button artdeco-button--2 artdeco-button--primary ember-view');
        confirmUnfollow[0].click();
    }, 0);
}