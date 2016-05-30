<h2><?php echo $pages->about->title() ?></h2>
<div class="content">
    <?php foreach($pages->about->images()->limit(1) as $key => $image): ?>
      <div class="bio-image" style="background-image:url(<?php echo $image->url() ?>);">
      </div>
    <?php endforeach ?>

  <div class="bio-text">
    <?php echo kirbytext($pages->about->about()) ?>
  </div>
</div>
