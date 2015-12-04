# -*- mode: ruby -*-
# vi: set ft=ruby :
Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"

  config.vm.synced_folder ".", "/home/vagrant/project",
    :nfs => true,
    :mount_options => ['nolock,vers=3,udp,noatime,actimeo=1']

  config.vm.network :private_network, ip: "10.33.36.11"
end
