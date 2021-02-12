const goStudent = () => {
    const universityStudent = document.querySelector('.university__student')
    const btnInUniversity = document.querySelector('.btn-in-university')
    const btnInUniversity

    coordinatesStudent = [
        [437, 434],
        [405, 341],
        [449, 266],
        [467, 180],
        [440, 100],
        [376, 113],
        [320, 132],
        [283, 204],
        [212, 166],
        [157, 128],
        [128, 191],
        [174, 243],
        [137, 285],
        [87, 321],
        [42, 362],
        [-28, 410],
        [10, 494],
        [84, 451],
        [156, 475],
        [232, 447],
        [277, 376],
        [341, 365],
        [359, 443],
        [398, 514],
        [430, 613],
        [454, 706],
        [404, 800],
        [355, 875],
        [315, 937],
        [246, 949],
        [219, 892],
        [257, 831],
        [292, 773],
        [283, 710],
        [229, 715],
        [189, 786],
        [120, 796],
        [110, 741],
        [146, 668],
        [188, 615],
        [235, 571],
        [220, 513],
        [161, 497],
        [106, 534],
        [73, 580],
        [14, 604],
        [-37, 636],
        [-10, 688],
        [69, 663],
        [15, 741],
        [69, 809],
        [38, 855],
        [102, 874],
    ]

    let k = 0
    btnInUniversity.addEventListener('click', function () {
        k++
        for (let i = 0; i < coordinatesStudent.length; i++) {
            if (i == k) {
                universityStudent.style.top = coordinatesStudent[i][0] + 'px'
                universityStudent.style.left = coordinatesStudent[i][1] + 'px'
            }
        }
    })

    universityStudent.addEventListener('mouseover', function () {
        console.log('h')
    })

}
goStudent()