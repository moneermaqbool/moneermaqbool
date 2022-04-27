function up(max) {
    document.getElementById("counter").value = parseInt(document.getElementById("counter").value) + 1;
    if (document.getElementById("counter").value >= parseInt(max)) {
        document.getElementById("counter").value = max;
    }
  }
  //decrease counter
  function down(min) {
    document.getElementById("counter").value = parseInt(document.getElementById("counter").value) - 1;
    if (document.getElementById("counter").value <= parseInt(min)) {
        document.getElementById("counter").value = min;
    }
  }
  addbtn.addEve