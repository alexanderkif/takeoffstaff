<template>
  <q-page class="flex flex-center">
    <div class="row">
      <q-list v-if="getUser" bordered separator >
        <q-item-label header class="text-h6 text-primary">Contacts</q-item-label>
        <div
          v-for="contact in getUser.contacts"
          :key="contact.id"
          class="relative-position"
        >
          <q-item active active-class="text-primary" clickable v-ripple>
            <q-item-section avatar>
              <q-item-label class="q-py-xs q-px-sm bg-primary text-white rounded-borders" >
                {{ contact.name }}
              </q-item-label>
            </q-item-section>

            <q-item-section>
              <q-item-label>
                {{ `+${contact.phone.slice(0,1)} ( ${contact.phone.slice(1,4)} ) - ${contact.phone.slice(4,7)} - ${contact.phone.slice(7)}` }}
              </q-item-label>
              <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
            </q-item-section>

            <q-item-section side style="width: 3rem;">
            </q-item-section>
          </q-item>
          <q-btn round outline color="primary" icon="delete" class="absolute-top-right q-ma-xs bg-white"
            @click.stop="deleteContact(contact.name)" />
        </div>
      </q-list>
    </div>
    <q-dialog v-model="openContactDeleteDialog" >
      <ContactDeleteDialog :contactName="contactName" />
    </q-dialog>
  </q-page>
</template>

<script>
import ContactDeleteDialog from '../components/ContactDeleteDialog'

export default {
  name: 'Contacts',
  components: {
    ContactDeleteDialog
  },
  data () {
    return {
      openContactDeleteDialog: false,
      contactName: null
    }
  },
  created () {
    if (!this.getUser) this.$router.push('/login')
  },
  methods: {
    deleteContact (contactName) {
      this.contactName = contactName
      this.openContactDeleteDialog = true
    }
  },
  computed: {
    getUser () {
      return this.$store.getters['user/getUser']
    }
  }
}
</script>
