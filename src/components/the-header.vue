<template>
	<div>
		<section class="hero is-small is-link">
			<div class="hero-head">
				<nav class="navbar">
					<div class="container">
						<div id="navbarMenuHeroA" class="navbar-menu">
							<div class="navbar-end">
								<span class="navbar-item">
									<a
										class="button is-primary is-inverted"
										href="mailto:someone@hello.com?Subject=Consider%20this!%20-%20feedback%20on%20tracker"
										target="_top">
										<span class="icon">
											<i class="fas fa-comment-dots" />
										</span>
										<span>Feedback</span>
									</a>
								</span>
								<span class="navbar-item">
									<a class="button is-primary is-inverted" href="https://github.com/kossuthl4jos/first-public" target="_blank">
										<span class="icon">
											<i class="fab fa-gitlab" />
										</span>
										<span>Documentation</span>
									</a>
								</span>
							</div>
						</div>
					</div>
				</nav>
			</div>

			<div class="hero-body">
				<h1 class="title has-text-centered">
					It's time to track...
					<i class="fas fa-clock" alt="Logo" />
				</h1>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: 'TheHeader'
};
</script>