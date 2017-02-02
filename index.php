<?php
// include 'firebaseInterface.php';
// include 'firebaseLib.php';
// include 'firebaseStub.php';
?>
<!DOCTYPE html>

<html>

    <head>
        <meta charset="UTF-8">
        <title>Event Register</title>

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

        <link rel="stylesheet" type="text/css" href="style.css">
    </head>

    <body>
        <div class="container-fluid">

            <div class="container">
                
                <div class="well">
                    <!-- <form> -->

  <h1><span class="label label-default" style=" height: 50%;
    display: flex;justify-content: center;
    align-items: center; ">Register</span></h1>
  </div>
                        <div class="form-group">
                            <label class="control-label col-sm-3">Event Name:</label>
                            <div class="col-sm-9">
                                <input id="eventName" class="form-control" type="text" name="eventName" />
                            </div>
                        </div>
                        &nbsp;

                        <div class="form-group">
                            <label class="control-label col-sm-3">Student body:</label>
                            <div class="col-sm-9">
                                <select class="form-control" id="studentBody">
                                    <option value="CSI">CSI</option>
                                    <option value="ECELL">ECELL</option>
                                    <option value="IEEE">IEEE</option>
                                    <option value="ROBOTICS">ROBOTICS</option>
                                </select>
                            </div>
                        </div>&nbsp;

                        <div class="form-group">
                            <label class="control-label col-sm-3">Date:</label>
                            <div class="col-sm-9">
                                <input id="date" class="form-control" type="date" name="date" />
                            </div>
                        </div>&nbsp;

                        <div class="form-group">
                            <label class="control-label col-sm-3">Registration Fee:</label>
                            <div class="col-sm-9">
                                <input id="fee" class="form-control" type="text" name="fee" />
                            </div>
                        </div>&nbsp;

                        <div class="form-group">
                            <label class="control-label col-sm-3">Contact:</label>
                            <div class="col-sm-9">
                                <input id="contactPerson" class="form-control" type="text" name="contactPerson" style="width: 50%" />:
                                <input id="contact" class="form-control" type="tel" name="contact" style="width: 50%" />
                            </div>
                        </div>&nbsp;

                        <div class="form-group">
                            <label class="control-label col-sm-3">Location:</label>
                            <div class="col-sm-9">
                                <input id="location" class="form-control" type="text" name="location" />
                            </div>
                        </div>
&nbsp;
                        <div class="form-group">
                            <label class="control-label col-sm-3">Event Description:</label>
                            <div class="col-sm-9">
                                <textarea id="eventDesc" class="form-control" name="eventDesc"></textarea>
                            </div>
                        </div>&nbsp;

                        <div class="form-group">
                            <label class="control-label col-sm-3">Reward:</label>
                            <div class="col-sm-9">
                                <input id="reward" class="form-control" type="text" name="reward" />
                            </div>
                        </div>
&nbsp;
                        <div class="form-group" >
                            <input id="createEvent" style="align-content: center;" class="btn btn-primary" onclick="addNewEvent()" type="submit" name="submit" value="CREATE EVENT"  />
                        </div>&nbsp;
                    <!-- </form>         -->
                </div>

            </div>
            
        </div>

        <script src="https://www.gstatic.com/firebasejs/3.6.7/firebase.js"></script>
        <script>
          // Initialize Firebase
          var config = {
            apiKey: "AIzaSyDIdd0ogU8nxMCSL4-Xpeou8KMUJwOV3PU",
            authDomain: "mj-connect.firebaseapp.com",
            databaseURL: "https://mj-connect.firebaseio.com",
            storageBucket: "mj-connect.appspot.com",
            messagingSenderId: "937124289290"
          };
          firebase.initializeApp(config);
        </script>
        
        <script type="text/javascript" src="addEvents.js"></script>
    </body>
</html>
