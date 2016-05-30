<?php foreach($page->images()->limit(3) as $image): ?>
  <div class="slide hide" style="background-image:url(<?php echo $image->url();?>)"></div>
<?php endforeach ?>
