<script>
	export let errors = null;
	export let values = null;
</script>

<form method="POST" enctype="multipart/form-data">
	<label class:invalid={errors?.title}>
		{errors?.title || 'Title'}
		<input
			class:invalid={errors?.title}
			name="title"
			type="text"
			value={values?.title ?? ''}
			required
		/>
	</label>

	<label class:invalid={errors?.file}>
		{errors?.file || 'File'}
		<input
			class:invalid={errors?.file}
			name="file"
			type="file"
			accept=".jpg,.png"
			minlength="10"
			required
		/>
	</label>

	<button>upload file</button>
</form>

<style>
	form {
		display: flex;
		width: 100%;
		margin: 0 0 1em 0;
		gap: 2em;
	}
	.invalid {
		color: red;
	}
</style>
