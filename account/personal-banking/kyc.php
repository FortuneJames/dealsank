<?php 
require_once("header.php"); ?>
       <!-- content @s -->
                <div class="nk-content nk-content-fluid">
                    <div class="container-xl wide-lg">
                        <div class="nk-content-body">
                            <div class="kyc-app wide-sm m-auto">
                                <div class="nk-block-head nk-block-head-lg wide-xs mx-auto">
                                    <div class="nk-block-head-content text-center">
                                        <h2 class="nk-block-title fw-normal">KYC Verification</h2>
                                        <div class="nk-block-des">
                                            <p>To comply with regulation each participant will have to go through indentity verification (KYC/AML) to prevent fraud causes. </p>
                                        </div>
                                    </div>
                                </div><!-- nk-block-head -->

                                <div class="nk-block">
                                	<?php   if (getKycStatus($userid) == 0) {
                                		

                                	 ?>
                                    <div class="card card-bordered">
                                        <div class="card-inner card-inner-lg">
                                            <div class="nk-kyc-app p-sm-2 text-center">
                                                <div class="nk-kyc-app-icon">
                                                    <em class="icon ni ni-files"></em>
                                                </div>
                                                <div class="nk-kyc-app-text mx-auto">
                                                    <p class="lead">You have not submitted your necessary documents to verify your identity. In order to continue using <?php echo $sitename; ?> online banking products, please verify your identity.</p>
                                                </div>
                                                <div class="nk-kyc-app-action">
                                                    <a href="kyc-form" class="btn btn-lg btn-primary">Click here to complete your KYC</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                              <?php } elseif(getKycStatus($userid) != 0){
                               $r = getKycStatus($userid);

                               if($r['status'] == "pending"){
                                ?>
                               <div class="card card-bordered">
                                        <div class="card-inner card-inner-lg">
                                            <div class="nk-kyc-app p-sm-2 text-center">
                                                <div class="nk-kyc-app-icon">
                                                    <em class="icon ni ni-files text-warning"></em>
                                                </div>
                                                <div class="nk-kyc-app-text mx-auto">
                                                    <p class="lead">Your KYC has been submitted successfully and currently awaiting confirmation, Kindly anticipate our feedback between the next 2-3 working days. Thank You!</p>
                                                </div>
                                                <div class="nk-kyc-app-action">
                                                   <strong>Ref:</strong><br>
                                                    <pre><?php echo$r['ref'] ?></pre>
                                                      <strong>Date submitted:</strong><br>
                                                    <pre><?php echo$r['datecreated'] ?></pre>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                               <?php } if($r['status'] == "success"){
                                ?>
                                 <div class="card card-bordered">
                                        <div class="card-inner card-inner-lg">
                                            <div class="nk-kyc-app p-sm-2 text-center">
                                                <div class="nk-kyc-app-icon">
                                                    <em class="icon ni ni-check-circle-fill text-success"></em>
                                                </div>
                                                <div class="nk-kyc-app-text mx-auto">
                                                    <h1 class="lead">You have been verified</h1>
                                                </div>
                                                <div class="nk-kyc-app-action">
                                                   <strong>Ref:</strong><br>
                                                    <pre><?php echo$r['ref'] ?></pre>
                                                      <strong>Date submitted:</strong><br>
                                                    <pre><?php echo$r['datecreated'] ?></pre>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            <?php }  } else{} ?>
                                    <div class="text-center pt-4">
                                        <p>If you have any question, please contact our support team <a href="mailto:<?php echo$siteemail ?>"><?php echo$siteemail ?></a></p>
                                    </div>
                                </div><!-- nk-block -->
                            </div><!-- kyc-app -->
                        </div>
                    </div>
                </div>
                <!-- content @e -->
<?php require_once("footer.php"); ?>