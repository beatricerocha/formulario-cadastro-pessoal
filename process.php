<?php 
  $print = function ($class){
    if(file exists( 'classes/' .$class. ' .php' )){
        include_once(' classes/ ' .$class. ' . php ' ); 
  }
};
spl_autoload_register( $print );
?>