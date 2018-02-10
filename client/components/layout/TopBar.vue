<template>
<b-navbar toggleable="md" type="dark" variant="info" fixed="top">
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#">DjangoVueTemplate</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item href="#">Link</b-nav-item>
      <b-nav-item href="#" disabled>Disabled</b-nav-item>
    </b-navbar-nav>

    <b-navbar-nav class="ml-auto">
      <b-nav-item href="/logout">Logout</b-nav-item>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'TopBar',
  computed: {
    ...mapState({
      user: state => state.user,
    }),
  },
  methods: {
    ...mapActions([
      'getCurrentUser',
    ]),
  },
  mounted () {
    this.getCurrentUser()
  },
}
</script>

<style scoped>

</style>
