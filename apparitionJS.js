function myAnim(sectionX) {
    var letter = sectionX.charAt(8),
        myTitle = "#title" + letter,
        myContent = "#content" + letter,
        tl = new TimelineMax();

    tl.to(sectionX, 2, {    //Conteneur de la section
        width: "100%",
        height: "100%",
        zIndex: 4
    })
      .to(myTitle, 2, {    //Titre de la section
        marginTop: "1%",
        paddingBottom: "1em"
        }, "-=2",)
      .to(myContent, 3, {    //Contenu de la section
        height: "95%"
        }, "-=1.5")
}