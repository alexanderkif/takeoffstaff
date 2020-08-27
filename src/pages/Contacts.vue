<template>
  <q-page class="flex flex-center">
    <div class="row">
      <q-list v-if="getUser" bordered separator >
        <q-item-label header class="text-h6 bg-primary text-white">
          {{ getUser.contacts.length ? 'Contacts' : 'You have no contacts.' }}
        </q-item-label>
        <div
          v-for="contact in getUser.contacts"
          :key="contact.name"
          class="relative-position"
        >
          <q-item active active-class="text-primary" clickable v-ripple
            @click.stop="editContact(contact)" >
            <q-item-section avatar>
              <q-avatar size="3rem" color="primary" text-color="white" class="text-uppercase">
                {{ contact.name.slice(0,1) }}{{ contact.name.slice(-1) }}
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-h6">
                {{ contact.name }}
              </q-item-label>
              <q-item-label>
                {{ `+${contact.phone.slice(0,1)} ( ${contact.phone.slice(1,4)} ) - ${contact.phone.slice(4,7)} - ${contact.phone.slice(7)}` }}
              </q-item-label>
              <q-item-label caption lines="1">{{ contact.email }}</q-item-label>
            </q-item-section>

            <q-item-section side style="width: 3rem;">
            </q-item-section>
          </q-item>
          <q-btn round outline color="primary" icon="delete" class="absolute-right bg-white delete-item-btn"
            @click.stop="deleteContact(contact.name)" />
        </div>
      </q-list>
    </div>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="accent" @click.stop="addContact" />
    </q-page-sticky>
    <q-dialog v-model="openContactDeleteDialog" >
      <ContactDeleteDialog :contactName="contactName" />
    </q-dialog>
    <q-dialog v-model="openContactDialog" >
      <ContactDialog :contactName="contactName" :contactEmail="contactEmail" :contactPhone="contactPhone" />
    </q-dialog>
  </q-page>
</template>

<script>
import ContactDeleteDialog from '../components/ContactDeleteDialog'
import ContactDialog from '../components/ContactDialog'

export default {
  name: 'Contacts',
  components: {
    ContactDeleteDialog,
    ContactDialog
  },
  data () {
    return {
      openContactDialog: false,
      openContactDeleteDialog: false,
      contactName: null,
      contactEmail: null,
      contactPhone: null
    }
  },
  created () {
    if (!this.getUser) this.$router.push('/login')
  },
  methods: {
    deleteContact (contactName) {
      this.contactName = contactName
      this.openContactDeleteDialog = true
    },
    addContact () {
      this.contactName = null
      this.contactEmail = null
      this.contactPhone = null
      this.openContactDialog = true
    },
    editContact (contact) {
      this.contactName = contact.name
      this.contactEmail = contact.email
      this.contactPhone = contact.phone
      this.openContactDialog = true
    }
  },
  computed: {
    getUser () {
      return this.$store.getters['user/getUser']
    }
  }
}
</script>

<style lang="scss" scoped>
.delete-item-btn {
  margin: auto 0;
  height: fit-content;
  right: 0.5rem;
}
</style>
