function startAnimation() { null == Interval && (Interval = setInterval(animate, 50)) } function stopAnimation() { null != Interval && (clearInterval(Interval), Interval = null) } function animate() { rota += 1, aniPoints += 1, aniPoints > 10 && 40 > aniPoints && (endAnimation = !1, fast_ += (2 - fast_) / 10, rot1_1 += (rot1_2 - rot1_1) / fast_, rot2_1 += (rot2_2 - rot2_1) / fast_, leaver_1.setAttribute("transform", "rotate(" + rot1_1 + " 20  156)"), leaver_2.setAttribute("transform", "rotate(" + rot2_1 + " 120  35)")), aniPoints > 30 && 50 > aniPoints && (fast_2 += (2 - fast_2) / 10, rot3_1 += (rot3_2 - rot3_1) / fast_2, leaver_3.setAttribute("transform", "rotate(" + rot3_1 + " 165  120)")), aniPoints > 50 && 80 > aniPoints && (fast_3 += (2 - fast_3) / 10, rot1_1 += (rot1_3 - rot1_1) / fast_3, leaver_1.setAttribute("transform", "rotate(" + rot1_1 + " 20  156)")), aniPoints > 80 && 120 > aniPoints && (fast_4 += (2 - fast_4) / 10, rot3_1 += (rot3_3 - rot3_1) / fast_4, rot2_1 += (rot2_3 - rot2_1) / fast_4, leaver_3.setAttribute("transform", "rotate(" + rot3_1 + " 165  120)"), leaver_2.setAttribute("transform", "rotate(" + rot2_1 + " 120  35)")), aniPoints > 120 && 150 > aniPoints && (fast_5 += (2 - fast_5) / 10, rot1_1 += (rot1_4 - rot1_1) / fast_5, rot2_1 += (rot2_4 - rot2_1) / fast_5, leaver_1.setAttribute("transform", "rotate(" + rot1_1 + " 20  156)"), leaver_2.setAttribute("transform", "rotate(" + rot2_1 + " 120  35)")), aniPoints > 160 && 190 > aniPoints && (fast_6 += (2 - fast_6) / 10, rot3_1 += (rot3_4 - rot3_1) / fast_6, leaver_3.setAttribute("transform", "rotate(" + rot3_1 + " 165  120)")), aniPoints > 185 && 220 > aniPoints && (sand_1 += (100 - sand_1) / 10, sand_flow.setAttribute("height", sand_1)), aniPoints > 220 && 240 > aniPoints && (sand_2 += (40 - sand_2) / 2, sand_flow.setAttribute("transform", "translate( 0, " + sand_2 + ")")), aniPoints > 260 && !endAnimation && (endAnimation = !0, aniPoints = 0, fast_ = 50, fast_2 = 50, fast_3 = 50, fast_4 = 50, fast_5 = 50, fast_6 = 50, sand_1 = 0, sand_2 = 0, sand_flow.setAttribute("height", 0), sand_flow.setAttribute("transform", "translate( 0, 0)")) } var endInterval = 0, rot1_1 = 0, rot1_2 = 15, rot1_3 = 40, rot1_4 = -5, rot2_1 = 0, rot2_2 = -60, rot2_3 = -30, rot2_4 = 20, rot3_1 = 0, rot3_2 = -70, rot3_3 = 30, rot3_4 = -70, sand_1 = 0, sand_2 = 0, fast_ = 50, fast_2 = 50, fast_3 = 50, fast_4 = 50, fast_5 = 50, fast_6 = 50, rota = 0, endAnimation = !1, aniPoints = 0, main_obj = document.getElementById("main_obj"), leaver_1 = document.getElementById("leaver_1"), leaver_2 = document.getElementById("leaver_2"), leaver_3 = document.getElementById("leaver_3"), sand_flow = document.getElementById("maskObj"), obj3 = document.getElementById("obj3"), Interval = null; document.getElementById("sand").setAttribute("transform", "translate( 215, 165)"), main_obj.setAttribute("transform", "translate( 100, 10)"), startAnimation();